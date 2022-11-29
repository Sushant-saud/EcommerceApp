import React, { useState } from 'react'
import menu from './menu.css'
import { Link } from 'react-router-dom'
import { ArrowBackIosRounded, Close, MenuTwoTone} from '@material-ui/icons'
import Navbar from '../Navbar/Navbar'
import { MenuItem, MenuList } from '@material-ui/core'

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
                {active ? <Close className='imclose' onClick={handleClose} /> : <MenuTwoTone className='immenu' onClick={handleClick} />}
                <div className={active ? "Navbar-menu active" : "Navbar-menu"}>
                    <ul className='Navbar-menu-ul'>
                        {/* {active ?<Close className='imclose' onClick={handleClose} /> : " "}  */}
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/store"><li>STORE <ArrowBackIosRounded className='ArrowBack' /></li> </Link>
                        <Link to="/iphone"><li>IPHONE</li></Link>
                        <Link to="/ipad"><li>IPAD</li></Link>
                        <Link to="/macbook"><li>MACKBOOK</li></Link>
                        <Link to="/store/Accesories"><li>ACCESORIES</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu