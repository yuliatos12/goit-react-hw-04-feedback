import React from 'react';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, countTotalFeedback, countPositiveFeedback}) => {
  
    return (
      <>
        <div>
          <h3>Statistics</h3>
          <List>
            <ListItem>Good: {good}</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
          </List>
        </div>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive feedback: {countPositiveFeedback()}%</p>
      </>
    );
  }
