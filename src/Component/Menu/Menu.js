import React, { useState } from 'react'
import menu from './menu.css'
import { Link } from 'react-router-dom'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import CloseIcon from '@mui/icons-material/Close';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Navbar from '../Navbar/Navbar'


function Menu() {
    const [active, setactive] = useState(false)
    const handleClick = () => {
        setactive(true);
    }
    const handleClose = () => {
        setactive(false);
    }
    return (
        <>
            <Navbar active={active} />
            <div className='menu'>
                <div className='Heading'>
                    <img src="\Image\iSHOP Logo.svg" alt="pic" />
                </div>
                {active ? <CloseIcon className='imclose' onClick={handleClose} /> : <MenuTwoToneIcon className='immenu' onClick={handleClick} />}
                <div className={active ? "Navbar-menu active" : "Navbar-menu"}>
                    <ul className='Navbar-menu-ul'>
                        {/* {active ?<Close className='imclose' onClick={handleClose} /> : " "}  */}
                        <Link className='nav' to="/"><li>HOME</li></Link>
                        <Link className='nav' to="/store"><li>STORE <ArrowBackIosRoundedIcon className='ArrowBack' /></li> </Link>
                        <Link className='nav'  to="/iphone"><li>IPHONE</li></Link>
                        <Link className='nav'  to="/ipad"><li>IPAD</li></Link>
                        <Link className='nav' to="/macbook"><li>MACKBOOK</li></Link>
                        <Link className='nav'  to="/store/Accesories"><li>ACCESORIES</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu