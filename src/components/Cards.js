import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Crads.css'

function Cards() {
    return (
        <div className="cards">

            <div className="sample_services sample">
                <h1>We can provide</h1>
                <ul className="sample_list">
                    <CardItem 
                        src='/images/1 (1).jpg'
                        label="Heighter Quality"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (2).jpg'
                        label="Italian Style"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (3).jpg'
                        label="Modern"
                        text='this roome is made with imported wooden from america'
                    />
                </ul>
                <div className="see_more">
                    <Link to="/Services" >See More <i class="fas fa-long-arrow-alt-down"></i></Link>
                </div>
            </div>

            <div className="sample_products sample">
                <h1>Some Of Our Products</h1>
                <ul className="sample_list">
                <CardItem 
                        src='/images/1 (4).jpg'
                        label="Heighter Quality"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (5).jpg'
                        label="Italian Style"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (6).jpg'
                        label="Modern"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (7).jpg'
                        label="Modern"
                        text='this roome is made with imported wooden from america'
                    />
                    <CardItem 
                        src='/images/1 (3).jpg'
                        label="Modern"
                        text='this roome is made with imported wooden from america'
                    />
                </ul>
                <div className="see_more">
                <Link to="/Products" >See More <i class="fas fa-long-arrow-alt-down"></i></Link>
                </div>

            </div>
            
        </div>
    )
}

export default Cards
