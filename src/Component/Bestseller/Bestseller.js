import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { category } from '../../data';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import BestSellerItem from '../BestSellerItem/BestSellerItem';
import Loadmore from '../LoadMore/Loadmore';
import best from './best.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from "reactstrap";

function Bestseller() {
    const [dropdownopen,setdropdownopen]=useState(false);
    const toggle=()=>setdropdownopen(prevState=>!prevState);
  return (
    <div className='BEST-SELLER'>
      <h3 className='Best-SELLER-heading'>BEST SELLER</h3>
      <div className='Best-SELLER-Nav'>
        <ul className='Best-SELLER-ul'>
          {
            category.map((data) => {
              return (
                <>
                  <Link to={`/bestseller/${data.category}`}><li>{data.name}</li></Link>
                </>
              )
            })
          }

        </ul>
        
      </div>

<ButtonDropdown isOpen={dropdownopen} toggle={toggle} className='dropdown'>
  <DropdownToggle caret>Menu</DropdownToggle>
  <DropdownMenu>
    <DropdownItem tag={Link} to={`/bestseller/all`}>all</DropdownItem>
    <DropdownItem tag={Link} to={`/bestseller/iphone`}>iphone</DropdownItem>
    <DropdownItem tag={Link} to={`/bestseller/ipod`}>ipad</DropdownItem>
    <DropdownItem tag={Link} to={`/bestseller/mac`}>mac</DropdownItem>
    <DropdownItem tag={Link} to={`/bestseller/accesories`}>accesories</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

      <div className='Best-Item'>
        <BestSellerItem />
      </div>
      <div>
      
        </div>
    </div>
  )
}

export default Bestseller