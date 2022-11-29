import React from 'react'
import PreFooter from '../../PreFooter/PreFooter';
import Annoucement from '../Annoucement/Annoucement';
import Banner from '../Banner/Banner';
import Bestseller from '../Bestseller/Bestseller';
import Loadmore from '../LoadMore/Loadmore';
import Navback from '../NavBack/Navback';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import store from './store.css';
import { Link, useLocation } from 'react-router-dom';
import {  ArrowRight } from '@material-ui/icons';
import Menu from '../Menu/Menu';
import Slider from '../slider/Slider';
function Store() {
    const id=true;
    const location=useLocation().pathname;
   
    return (
        <>
            <Annoucement />
            <Menu/>
            <Navback />
            <div className='store'>

                <div className='Access-left'>
              <Link to={`/store/Accesories`}> <h3 className='heading'>ACCESORIES <span className='right-icon'><ArrowRight/></span></h3></Link> 
                    <ul className='left'>
                        <li>AirPort & Wireless</li>
                        <li>AppleCare</li>
                        <li>Bags,Shells,Sleeves</li>
                        <li>Business & Security</li>
                        <li>Cables & Docks</li>
                    </ul>
                    <ul className='left'>
                        <li>Cameras & Video</li>
                        <li>Car & Travel</li>
                        <li>Cases & Flims</li>
                    </ul>
                </div>
                <div className='Access-center'>
                <h3 className='heading'>Category</h3>
                    <ul className='center'>

                        <li>Charging Devices</li>
                        <li>Connected Home</li>
                        <li>Devices Care</li>
                        <li>Display & Graphic</li>
                        <li>Fitness & Sports</li>
                    </ul>
                    <ul className='center'>
                        <li>Headphones</li>
                        <li>HealthKit</li>
                    </ul>
                </div>
                <div className='Access-right'>
                <h3 className='heading'>Category</h3>
                    <ul className='right'>
                        <li>Mic & Keywords</li>
                        <li>Music Creation</li>
                        <li>Networking & Server</li>
                    </ul>
                </div>
            </div>
            <Bestseller/>
            <Loadmore/>
            <Banner/>
            <Services/>
            <Slider/>
            <PreFooter/>
        </>
    )
}

export default Store