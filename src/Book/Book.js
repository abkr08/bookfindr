import React from 'react';
import './Book.css';
import StarIcon from '../SVG'; 

const book = props => {
    console.log(props);
    let stars = [];
    let ratings = props.ratings;
    for(let i = 0; i < 5; i++){
        stars.push(<StarIcon key={i} color={ratings > 0 ? 'gold' : 'grey'}/>);
        ratings--;
        }
   
    return (
        <div className='Book'> 
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.bookImage} alt='book'/></a>
            <span>
            <a href={props.link}><h4>{props.bookTitle}</h4></a>
                <p>{props.author ? `By ${props.author}` : 'Unknown author'}</p>
                <p>{stars}</p>
            </span>
        </div>
    )
}

export default book;