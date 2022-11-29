import { Facebook, Twitter } from '@material-ui/icons';
import React from 'react'
import footer from './footer.css';
function PreFooter() {
    return (
        <div className='main-footer'>
            <div className='footer-1'>
                <div className='ishop'>
                    <img src="\Image\iSHOP Logo.svg" />
                    <p>This assessment includes capthis project you will understandmponents in React like Smart Components and Dummy Components and how to modify and do</p>
                </div>
                <div className='follow'>
                    <h3>Follow Us</h3>
                    <p>This assessand Retiple components in React like Smart Components and Dummdify and do</p>
                    <div className='follow-social'>
                    <Twitter className='follow-social-t'/>
                    <Facebook className="follow-social-f"/>
                    </div>
                
                </div>
                <div className='contact'>
                    <h3>Contact Us</h3>
                    <p>This assessment inoping this project you in React like Smart Components and Dummy Components and how to modify and do</p>
                </div>

            </div>
            <div className='footer-2'>
                <div className='information'>
                    <h3 >information</h3>
                    <li>About us</li>
                    <li>information</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                </div>
                <div className='information'>
                <h3 >Services</h3>
                    <li>About us</li>
                    <li>information</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                </div>
                <div className='information'>
                <h3 >Extras</h3>
                    <li>About us</li>
                    <li>information</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                </div>
                <div className='information'>
                <h3 >My Account</h3>
                    <li>About us</li>
                    <li>information</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                </div>
                <div className='information'>
                <h3 >Useful Links</h3>
                    <li>About us</li>
                    <li>information</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                </div>

            </div>

        </div>
    )
}

export default PreFooter