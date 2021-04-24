import React from 'react';
import './CardItem.css'


function CardItem(props) {
    return (
        <>
            <li className="card_item">
                <div className="img_box" data-title={props.label}>
                    <img src={props.src} />
                    <br></br>
                </div>
                <div className="info_box">
                    <h5>{props.text}</h5>
                </div>
            </li>
        </>
    )
}

export default CardItem
