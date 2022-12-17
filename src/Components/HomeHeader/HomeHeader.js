import React from 'react'
import './HomeHeader.css';

function HomeHeader(props) {

    return (
        <div className="inner-body-column display-5">
            <img className="img-1" src={props.headimg} alt="logo" />
            <h3 className="h3-title" style={{ color: props.color }}>{props.title}</h3>
            <p className="column-para" style={{ color: props.color }}>{props.bodypara}</p>
        </div>
    )
}

export default HomeHeader;
