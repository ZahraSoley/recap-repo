import React from 'react'
import './Footer.css'
import FooterLogo from '../../assets/FooterLogo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <img src={FooterLogo} alt="" style={{ width:'250px' }} />
                <div className='doormat-nav'>
                    <p>Doormat Navigation</p>
                    <ul style={{color:"white"}}>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>

                <div className='contact'>
                    <p>Contact Us</p>
                    <ul style={{color:"white"}}>
                        <li><a href="">Phone Number</a></li>
                        <li><a href=""> Email</a></li>
                    </ul>
                </div>

                <div className='social-media'>
                    <p>Follow Us On</p>
                    <ul>
                        <li><img src={FooterLogo} alt="" /></li>
                        <li><img src={FooterLogo} alt="" /></li>
                        <li><img src={FooterLogo} alt="" /></li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer
