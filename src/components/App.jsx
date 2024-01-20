import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification} from "./Notification/Notification";
import React, { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedback = feedback => {
    switch(feedback){
      case 'good':
        return setGood(prevState => prevState + 1);
        case 'neutral':
          return setNeutral(prevState => prevState + 1);
          case 'bad':
            return setBad(prevState => prevState + 1);
            default:
              return;
    }

  }
  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedback = () => {

    const totalFeedback = countTotalFeedback();

    if (!totalFeedback) {
      return 0;
    }

    const positiveFeedback = (good / totalFeedback) * 100;
    return Math.round(positiveFeedback);
  }


    return (
      <Section title="Please leave feedback">
        <FeedbackOptions getFeedback={getFeedback}/>
        {countTotalFeedback() === 0 ? (<Notification message='There is no feedback'/>)
        : (<Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedback={countPositiveFeedback}
          />
          )}
      </Section>
    );
  };
