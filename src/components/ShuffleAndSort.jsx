import React, { useState } from 'react';
import Card from './Card';
import CardData from '../data/cardData.json';

export default function ShuffleAndSort(props) {
    const [displayCards, setDisplayCards] = useState(CardData);

    const handleShuffle = (cards) => {
        const shuffledCards = cards.sort(() => 0.5 - Math.random());
        setDisplayCards([...shuffledCards]);
    }

    const handleSort = (cards) => {
        const sortedCards = cards.sort((a, b) => a.number - b.number);
        setDisplayCards([...sortedCards]);
    }


    return (
        <div>
            <div className='main-container'>
                <div className='card-container'>
                    {displayCards.map(i => {
                        return (
                            <Card key= {i.number.toString()} number={i.number} color={i.color} />
                        )
                    })}
                </div>
                <div className='button-container'>
                    <button className='button' onClick={() => handleShuffle(displayCards)}>SHUFFLE</button>
                    <button className='button' onClick={() => handleSort(displayCards)}>SORT</button>
                </div>
            </div>
            <div className='title'>Shuffle and sort by Divyashree RC</div>
        </div>
    )
}