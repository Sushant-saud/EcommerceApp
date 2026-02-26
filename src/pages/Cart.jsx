
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Annoucement from "../Component/Annoucement/Annoucement";
import PreFooter from "../PreFooter/PreFooter";
import Menu from "../Component/Menu/Menu";
import { mobile } from '../Responsive';
import { NavLink } from "react-router-dom";
const Container = styled.div`
   width:100%;
`;
const Wrapper = styled.div`
  padding: 20px;
  width:100%;
  ${mobile({ padding: "10px", width: "100%" })}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ fontWeight: "500px", fontSize: "30.9px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ fontWeight: "500px", fontSize: "10.9px" })}
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
 
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ margin: "10px" })}
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "150px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ margin: "10px", gap: "2rem" })}
`;

const ProductName = styled.span`
font-size:"5px";
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "15px" })}
 
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${mobile({ fontWeight: "500px", fontSize: "25.9px" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleIncrement=()=>{
    console.log("incre")
  }
  return (
    <Container>
      <Annoucement />
      <Menu />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              cart.product.map((pro) => {
                return (<>
                  <Product>
                    <ProductDetail>
                      <Image src={pro.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {pro.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {pro._id}
                        </ProductId>
                        <ProductColor color={pro.color} />

                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <AddIcon onClick={handleIncrement("inc")}/>
                        <ProductAmount>{pro.quantity}</ProductAmount>
                        <RemoveIcon onClick={handleIncrement("de")} />
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {pro.price}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                </>)

              })}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <NavLink to="/pay" state={{total:cart.total}}>
            <Button >CHECKOUT NOW</Button>
            </NavLink>
           
          </Summary>
        </Bottom>
      </Wrapper>
      <PreFooter />
    </Container>
  );
};

export default Cart;
