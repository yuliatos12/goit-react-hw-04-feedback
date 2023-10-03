import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';


export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = ['good', 'neutral', 'bad'];

    const handleAddFeedback = (option) => {
        switch (option) {
            case 'good':
                setGood(prevGood => prevGood + 1)
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1)
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1)
                break;
            default:
                break;
        };
    };

    const totalFeedback = () => {
        return good + neutral + bad;
    }

    const positiveFeedback = () => {
        const total = totalFeedback();
        return Math.round(good * 100 / total);
    }

    return (
        <>
            <Section title='Please, leave feedback!'>
                <FeedbackOptions
                    options={options}
                    handleLeaveFeedback={handleAddFeedback} />
            </Section>
            <Section title='Statistics'>
                {(totalFeedback() > 0) ? (<Statistics
                    goodCounter={good}
                    neutralCounter={neutral}
                    badCounter={bad}
                    total={totalFeedback()}
                    positivePercentage={positiveFeedback()} />)
                    : (<Notification
                        message='There is no feedback' />)}
            </Section>
        </>
    );
};
