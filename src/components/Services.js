import React from 'react'
import CardItem from './CardItem'
import './Services.css'

function Services() {
    return (
        <div className="services">
            <h1>Services</h1>
            <ul className="services_list">
                <CardItem 
                    src='/images/2 (1).jpg'
                    label="Good Team"
                    text='this roome is made with imported wooden from america'
                />
                <CardItem 
                    src='/images/2 (2).jpg'
                    label="Fast Response"
                    text='this roome is made with imported wooden from america'
                />
                <CardItem 
                    src='/images/2 (3).jpg'
                    label="Native Tools"
                    text='this roome is made with imported wooden from america'
                />
                <CardItem 
                    src='/images/2 (4).jpg'
                    label="Good Team"
                    text='this roome is made with imported wooden from america'
                />
                <CardItem 
                    src='/images/2 (6).jpg'
                    label="Fast Response"
                    text='this roome is made with imported wooden from america'
                />
                <CardItem 
                    src='/images/2 (5).jpg'
                    label="Native Tools"
                    text='this roome is made with imported wooden from america'
                />
            </ul>
        </div>
    )
}

export default Services
