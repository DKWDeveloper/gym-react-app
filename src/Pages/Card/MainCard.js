import React from 'react'
import Card from './Card'
import { card } from '../../assets/values';

function getData(obj) {
    // console.log(obj)
    return (
        <Card
            id={obj.id}
            key={obj.id}
            img={obj.image}
            cardtitle={obj.cardtitle}
            cardparagraph={obj.cardparagraph}
        />
    );
}
function MainCard() {
    return (
        <div className='inner-body-row'>
            {card.map(getData)}
        </div>
    )
}

export default MainCard
