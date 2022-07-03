import React from 'react';
import './style.css';

export default function Card(props) {

    return (
        <div className='card' style={{ backgroundColor: props.color }}>
            {props.number}
        </div>
    )
}