import React, { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';
import { Wrapper } from './App.styled';


export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = ['good', 'neutral', 'bad'];
    const countTotalFeedback = good + bad + neutral;
    const onLeaveFeedback = option =>{
    if (option === 'good') {
        setGood(prevGood => prevGood + 1)
    } else if (option === 'neutral') {
        setNeutral(prevNeutral => prevNeutral + 1)
    } else if (option === 'bad') {
        setBad(prevBad => prevBad + 1)
    } 
    else {
        return;
    }
    };

const countPositiveFeedbackPercentage = Math.round((good * 100) / countTotalFeedback) || 0;

    return (
     <Wrapper>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
            />
        </Section>
        <Section title="Statistics">
            {countTotalFeedback<1 ? (
            <Notification message = 'There is no feedback given'>
            </Notification>) : (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
                />
            )}

        </Section>
     </Wrapper>)

 }


 