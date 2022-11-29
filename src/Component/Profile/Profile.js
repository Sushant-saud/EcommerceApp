import { Person } from '@material-ui/icons';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Annoucement from '../Annoucement/Annoucement';
import Menu from '../Menu/Menu';
import profile from './profile.css';
function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const handleLogoutt = async (e) => {
        try {
            alert("Are you sure to logout");
            window.localStorage.removeItem('persist:root');
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <Annoucement />
            <div className='parent'>
                <h3>User details</h3>
                <img src="\Image\support.svg" className='user-profile' alt="img" />
                <div className='login-register'>
                    <Link to="/login"><button className='btn-1'>Login</button></Link>
                    <Link to="/register"><button className='btn-2'>Register</button></Link>

                </div>
                <div className='profile-details'>
                    <div className='profile-details-1'>
                        <p>ID:</p>
                        <p>Name:</p>
                        <p>Email:</p>
                        <p>Phone no:</p>
                        <p>City:</p>
                        <p>State:</p>
                        <p>Landmark:</p>
                    </div>
                    <div className='profile-details-2'>
                        <p>123456789</p>
                        <p>Sushant</p>
                        <p>sushantsaud980@gmail.com</p>
                        <p>7093813281</p>
                        <p>Hyderabad</p>
                        <p>Telengana</p>
                        <p>Shivam road</p>
                    </div>
                </div>
                {
                    user ?<div className='logout-register'>
                            <Link to="/login"><button className='btn-1' onClick={handleLogoutt}>Logout</button></Link>
                         </div>:" "
                }
            </div>
        </>


    )
}

export default Profile