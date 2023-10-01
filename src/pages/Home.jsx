
import React from 'react'
import Annoucement from '../Component/Annoucement/Annoucement'
import Categories from '../Component/Categories/Categories';
import Newslate from '../Component/Newslate/Newslate';

import Slider from '../Component/slider/Slider';
import Footer from '../Component/Footer/Footer';
import Navback from '../Component/NavBack/Navback';
import BestSellerItem from '../Component/BestSellerItem/BestSellerItem';
import Bestseller from '../Component/Bestseller/Bestseller';
import Loadmore from '../Component/LoadMore/Loadmore';
import Banner from '../Component/Banner/Banner';
import Services from '../Component/Services/Services';
import PreFooter from '../PreFooter/PreFooter';

import Menu from '../Component/Menu/Menu';
function Home() {
  return (
    <div>
      <Annoucement />
       <Menu/>
       <Navback/>
       <Bestseller/>
       <Loadmore/>
       <Banner/>
       <Services/>
       <Slider/>
       <PreFooter/>
        {/*
      <Navback/>
      
      <Loadmore/>
      <Banner/>
      <Services/>
      <Slider/>
      <PreFooter/>
    
     */}
    
      {/* <Categories />
      <Product /> */}

      {/* <Slider />
        <Categories />
        <Product />
      
      <Newslate />
      <Footer/> */}
    </div>
  )
}

export default Home