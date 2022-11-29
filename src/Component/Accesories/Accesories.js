
import React from 'react'
import PreFooter from '../../PreFooter/PreFooter';
import AccessTop from '../AccesoriesTop/AccessTop';
import AccessorFirst from '../AccessorFirst/AccessorFirst';
import Annoucement from '../Annoucement/Annoucement';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Navback from '../NavBack/Navback';
import Navbar from '../Navbar/Navbar';
import acces from './acces.css';
function Accesories() {
  return (
    <>
    <Annoucement/>
    <Menu/>
    <AccessTop/>
    <AccessorFirst/>
    <PreFooter/>
   
  
    {/* <PreFooter/> */}
  
    </>
  )
}

export default Accesories