import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import nav from './nav.css';
import BadgeIcon  from '@mui/icons-material/Badge';
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
                            <BadgeIcon badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </BadgeIcon>
                            <p>{Price}</p>
                        </div>
                    </Link>
                    <Link to="/profile" className='Link'>
                        <div className='MenuItem-2'>
                            <span ><PersonIcon className='pro1' /></span>
                            <span className='pro2'>profile</span>
                        </div>
                    </Link>
                    {/* <div className='MenuItem'>Sign In</div> */}
                    <div div className='SearchContainer'>
                    <input type='text' value={input} onChange={(e) => setinput(e.target.value)} />
                    <SearchIcon />
                </div>
                </div>


             

            </div>
        </div>
    )
}

export default Navbar