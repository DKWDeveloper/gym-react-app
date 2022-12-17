import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import FooterSocialLink from './FooterSocialLink'
import { FooterSocialdata } from '../../assets/values'


const Footer = () => {
    return (
        <div className="footer-container display-4">
            <div className="inner-footer-container">
                <div className="inner-footer-content">
                    <div className="footer-logo-div">
                        <img className="footer-logo" src="https://gym.oceanwp.org/wp-content/uploads/2022/04/fitness-1.png"
                            alt="footerlogo" />
                    </div>
                    <h1 className="h1-gym-club">Gym Club</h1>
                    <p className="p-contact">www.abcd.org | contact@oabcdwpsite.com | +111 22-33-444</p>


                    <div className="display footer-social-cnt">

                        {
                            FooterSocialdata.map((d, i) => {
                                return (
                                    <FooterSocialLink
                                    key = {i}
                                        social={d.socialIcon}
                                    />
                                );
                            })
                        }






                    </div>



                </div>



            </div>
            <div className="copyright copyright-fontsize">
                <p>© COPYRIGHT - CREATED BY DEEPAK KUMAR <Link className="footer-hover copyright-fontsize" to="">GYM</Link></p>
            </div>
        </div>
    )
}

export default Footer
