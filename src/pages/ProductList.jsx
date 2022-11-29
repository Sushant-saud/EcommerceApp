

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Annoucement from '../Component/Annoucement/Annoucement'
import BestSellerItem from '../Component/BestSellerItem/BestSellerItem'
import BestSellerItemList from '../Component/BestSellerItemList/BestSellerItemList'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import Newslate from '../Component/Newslate/Newslate'
import Product from '../Component/Product/Product'
import PreFooter from '../PreFooter/PreFooter'
import Menu from '../Component/Menu/Menu'
const Container = styled.div`

`
const Title = styled.h1`
margin:20px;

`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`
const Filter = styled.div`
margin:20px;

`
const FilterText = styled.span`
font-size:20px;
font-weight:500;
margin-right:20px;
`
const Select=styled.select`
padding:10px;
margin-right:20px;
`
const Option=styled.option`
`
function ProductList() {
    const location=useLocation();
    const cat=location.pathname.split("/")[2];
    const [filter,setfilter]=useState({})
    const [sort,setsort]=useState("newest")
    const handleFilter=(e)=>{
         const value=e.target.value;
         setfilter({
            ...filter,
           [e.target.name]:value,
         })
    };
    return (
        <Container>
            <Annoucement />
            <Menu/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product:</FilterText>
                    <Select onChange={handleFilter} name='color'>
                        <Option defaultChecked>Color</Option>
                        <Option > white</Option>
                        <Option > black </Option>
                        <Option > red</Option>
                        <Option > blue</Option>
                        <Option >yellow</Option>
                        <Option >green</Option>
                    </Select>
                    <Select  onChange={handleFilter} name='size'>
                        <Option defaultChecked>Screen-Size</Option>
                        <Option >15.1cm</Option>
                        <Option >14.4cm</Option>
                        <Option >14.1cm</Option>
                        <Option >14.cm</Option>
                        <Option >12cm</Option>
                        <Option >12.5cm</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e)=>{setsort(e.target.value)}}>
                    <Option>select</Option>
                        <Option value="newest">newest</Option>
                        <Option value="asc"> price (asc)</Option>
                        <Option value="desc"> price(desc) </Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {/* <Product cat={cat} filter={filter} sort={sort}/> */}
            <BestSellerItem cat={cat} filter={filter} sort={sort}/> 
            <Newslate />
           <PreFooter/>
        </Container>
    )
}

export default ProductList