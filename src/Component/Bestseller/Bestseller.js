import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { category } from '../../data';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import BestSellerItem from '../BestSellerItem/BestSellerItem';
import Loadmore from '../LoadMore/Loadmore';
import best from './best.css';

function Bestseller() {
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
      <Dropdown title="Best-Product" className='dropdown'>
                <Dropdown.Item as="a" href=
                "https://ecommerce123a.herokuapp.com/bestseller/all">
                All
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://ecommerce123a.herokuapp.com/bestseller/iphone"
                >
                  iphone
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://ecommerce123a.herokuapp.com/mac">
                mac
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://ecommerce123a.herokuapp.com/ipod"
                >
                  ipod
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://ecommerce123a.herokuapp.com/accesories"
                >
                  Accessorie
                </Dropdown.Item>
            </Dropdown>
      <div className='Best-Item'>
        <BestSellerItem />
      </div>
      <div>
      
        </div>
    </div>
  )
}

export default Bestseller