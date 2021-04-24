import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="subscription">
                <h5>Subscribe to be notified with all updates</h5>
                <form>
                    <input type="email" name="email" placeholder="Your Email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer_info">
                <div className="logo">
                    TRVL <i className="fas fa-rocket"></i>
                </div>
                <div className="contact">
                    <h5>contact with us:</h5>
                    <ul>
                        <li><span><i class="fas fa-phone-alt"></i></span> <span>+0245588741</span></li>
                        <li><span><i class="far fa-envelope"></i></span> <span>shgskjdhs@hsjk.com</span></li>
                        <li><span><i class="fas fa-map-marker-alt"></i></span> <span>15-wall st, Tamia, Fyoum, Egypt</span></li>
                    </ul>
                </div>
                <div className="social">
                <h5>follow on:</h5>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a  href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a  href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>             
            </div>
            <div className="rights">
                   <p>&copy; Alqiaty | All Rights Reseved 2021&reg;</p>
            </div>
        </div>
    )
}

export default Footer
