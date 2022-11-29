import React from 'react'
import styled from 'styled-components';
import { Person, PersonAdd, PowerOffOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import nav from './nav.css';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [input, setinput] = useState();
    const quantity = useSelector(state => state.cart.quantity);
    const Price= useSelector(state => state.cart.total);
     return (
        <div className="Container">
            <div className='Wrapper'>
                <div className='Left'>
                    {/* <span className='Language'></span> */}
                    <select className='select-left'>
                        <option>EN</option>
                        <option>Hindi</option>
                        <option>Telgu</option>
                    </select>
                    <select className='select-left'>
                        <option>$</option>
                        <option>RS</option>
                        <option>Pound</option>
                    </select>

                </div>


                <div className='Right'>
                    <Link to="/cart" className='Link'>
                        <div className='MenuItem-1'>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                            <p>{Price}</p>
                        </div>
                    </Link>
                    <Link to="/profile" className='Link'>
                        <div className='MenuItem-2'>
                            <span ><Person className='pro1' /></span>
                            <span className='pro2'>profile</span>
                        </div>
                    </Link>
                    {/* <div className='MenuItem'>Sign In</div> */}
                    <div div className='SearchContainer'>
                    <input type='text' value={input} onChange={(e) => setinput(e.target.value)} />
                    <Search />
                </div>
                </div>


             

            </div>
        </div>
    )
}

export default Navbar