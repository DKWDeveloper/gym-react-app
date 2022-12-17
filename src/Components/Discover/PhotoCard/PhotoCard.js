import React from 'react'
import { Icon } from '../../../assets/values'
import './PhotoCard.css'
import SocialIcon from './SocialIcon/SocialIcon'


export default function PhotoCard({ img, cardparagraph, cardtitle }) {


    return (

        <div className="part-5">
            <div className="img-cnt-div-5">
                <img className="img-cnt-5"
                    src={img}
                    alt="img-cnt-5" />
            </div>
            <div className="content-5">
                <h5 className="p-cnt">{cardparagraph}</h5>
                <div className="line"></div>
                <h2 className="h2-cnt">{cardtitle}</h2>
            </div>


            <div className="social-cnt-5">
                {
                    Icon.map((value, index) => {
                    
                        return (
                            <SocialIcon
                                id={index}
                                key={index}
                                icon={value.iconName}
                            />
                        )
                    })
                }
            </div>
        </div>





    )
}

export function Card() {
    return (
        <div className="inner-body-row-5">
            <div className="part-5">
                <div className="img-cnt-div-5">
                    <img className="img-cnt-5"
                        src="https://gym.oceanwp.org/wp-content/uploads/2022/03/gym-trainer-1-1.jpg"
                        alt="img-cnt-5" />
                </div>
                <div className="content-5">
                    <h5 className="p-cnt">ANTHONY WRIGHT</h5>
                    <div className="line"></div>
                    <h2 className="h2-cnt">CROSSFIT</h2>
                </div>
            </div>
        </div>
    )
}


