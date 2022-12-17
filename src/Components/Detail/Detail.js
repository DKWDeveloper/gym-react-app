import React from 'react'
import './Detail.css'
import { DetailCard } from '../../assets/values';


function Detail() {



    return (
        <div className="footer-part ">
            <div className="footer-card-container display-row">
                <DetailList
                    signIcon={DetailCard[0].signIcon}
                    title={DetailCard[0].signTitle}
                    head={DetailCard[0].signHead}
                />

                <DetailList
                    bgColor="colokbg"
                    color="#4dd8c1"
                    signIcon={DetailCard[1].signIcon}
                    title={DetailCard[1].signTitle}
                    head={DetailCard[1].signHead}
                />

                <DetailList
                    signIcon={DetailCard[2].signIcon}
                    title={DetailCard[2].signTitle}
                    head={DetailCard[2].signHead}
                />


            </div>
        </div>
    )
}
export default Detail;


export function DetailList({ bgColor, color, signIcon, title, head }) {



    return (
        <div className="footer-card-1" id={bgColor}>
            <div className="footer-card-inner">
                <i className={signIcon}></i>
                <div className="footer-sign ">
                    <h5 className="h5-footer" style={{ color: color }}>{title}</h5>
                    <h2 className="h2-footer">{head}</h2>
                </div>
            </div>
        </div>
    );

}
