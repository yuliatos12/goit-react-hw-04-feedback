import React from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({getFeedback}) => {

   const handleClick = e => {
    getFeedback(e.target.name);
    };
   
return (
    <>
    <Button type='button' name="good" style={{backgroundColor: 'lightgreen'}} onClick={handleClick}>Good</Button>
    <Button type='button' name="neutral" style={{backgroundColor: 'lightblue'}} onClick={handleClick}>Neutral</Button>
    <Button type='button' name="bad" style={{backgroundColor: 'red'}} onClick={handleClick}>Bad</Button>
    </>
)

}