import React from 'react'
import './Footer.css'
import FooterLogo from '../../assets/FooterLogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <img src={FooterLogo} alt="" style={{ width: '250px' }} />
                <div className='doormat-nav'>
                    <p>Doormat Navigation</p>
                    <ul style={{ color: "white" }}>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><Link to='/reserve-a-table'>Reservation</Link></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>

                <div className='contact'>
                    <p>Contact Us</p>
                    <ul style={{ color: "white" }}>
                        <li><a href=""> Email</a></li>
                        <li><a href=""> Contact Info </a></li>

                    </ul>
                </div>

                <div className='social-media'>
                    <p>Follow Us On</p>
                    <ul style={{ color: "white" }}>
                        <li><a href=""> Instagram</a></li>
                        <li><a href=""> Twitter</a></li>
                        <li><a href=""> Facebook</a></li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer
