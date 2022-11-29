import React from 'react'
import service from './service.css';
import { SerData } from '../../data';
function Services() {
    return (
        <div className='Services'>
            {
                SerData.map((data) => {
                    return (
                        <>
                            <div className='Freeshiping'>
                                <img src={data.img} alt="freeshipping" />
                                <h3>{data.title}</h3>
                                <p>{data.des}</p>

                            </div>
                        </>)
                })
            }


        </div>
    )
}

export default Services