import { Star } from '@material-ui/icons'
import React from 'react'
import { useEffect,useState } from 'react';
import accessproduct from './accessproduct.css';
function AccessorProduct({data}) {
  return (
    <div className='Accessor-Product'>
        <img src={data.img} alt='img'/>
        <h3>{data.name}</h3>
        <div>
            <Star className='red'/>
            <Star className='red'/>
            <Star className='red'/>
            <Star className='red'/>
            <Star className='gray'/>
        </div>
        <p className='accessproduct-price'>$499 <s className='accessproduct-strike'>$4454</s></p>
        
    </div>
  )
}

export default AccessorProduct