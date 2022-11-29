import React, { useEffect, useState } from 'react'
import Annoucement from '../Component/Annoucement/Annoucement'
import Footer from '../Component/Footer/Footer'
import Newslate from '../Component/Newslate/Newslate'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { publicRequest } from '../Component/RequestMethod/requestMethod'
import { useLocation } from 'react-router-dom'
import { addproduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import {mobile} from '../Responsive'
import PreFooter from '../PreFooter/PreFooter'
import Menu from '../Component/Menu/Menu'


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex: 1;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"40vh"})}
`
const Title = styled.h1`
font-weight:200px;
${mobile({fontSize:"30px"})}
`
const Desc = styled.p`
margin: 20px 0px;
${mobile({fontSize:"20px"})}
`
const Price = styled.span`
font-weight: 100;
font-size:40px;
${mobile({fontSize:"20px"})}
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobile({width:"100%"})}
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
margin:5px;

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
  display:flex;
  align-items:center;
  width:50%;
  ${mobile({width:"100%"})}
`
const AmmoutContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
margin-right:15px;
${mobile({marginRight:"5px"})}
`
const Ammount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
&:hover{
 background-color:#f8f4f4
}
`
function Product() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [products, setproducts] = useState({});
    const [quantity, setquantity] = useState(1);
    const [color, setcolor] = useState(" ");
    const [size, setsize] = useState(" ");
    const dispatch=useDispatch()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/product/find/" + id);
                const data =await res.data;
                setproducts(data);
        
            } catch { }
        };
        getProduct();
    }, [id]);
    const handleQuantity = (type) => {
        if (type === "dec") {
            { quantity <= 0 ? setquantity(0) : setquantity(quantity - 1); }
        }
        else {
            setquantity(quantity + 1);
        }

    }
    const handleClick=()=>{
        dispatch(addproduct({products,quantity,price:products.price*quantity}))
    }
    return (

        <Container>
              <Annoucement />
            <Menu/>
            <Wrapper>
                <ImgContainer>
                    <Image src={products.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{products.title}</Title>
                    <Desc>{products.desc}</Desc>
                    <Price>${products.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {
                                products.color?.map((c) => (
                                    <FilterColor color={c} key={c} />
                                ))
                            }

                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setsize(e.target.value)}>
                                {products.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmmoutContainer>
                            <Remove onClick={() => handleQuantity('dec')} />
                            <Ammount>{quantity}</Ammount>
                            <Add onClick={() => handleQuantity('inc')} />
                        </AmmoutContainer>
                        <Button onClick={handleClick}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newslate />
          <PreFooter/>
        </Container>
    )
}
export default Product

