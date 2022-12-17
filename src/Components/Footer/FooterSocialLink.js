import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const FooterSocialLink = (props) => {
    return (
        <Link className="social-card-hover-2" to=" ">
            <div className="social-card-hover social-card-hover-1 nav-social-imgs1 card-social-icon-bg-1 social-icon" style={{ border: 'none', borderRadius: "0px" }}>
                <i className={props.social}></i>
            </div>
        </Link>
    )
}

export default FooterSocialLink
