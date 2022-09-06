import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setPositivePercentage(Math.round((good / total) * 100));

    setTotal(good + bad + neutral);
  }, [bad, good, neutral, total]);

  const goodUpdete = () => {
    setGood(prevGood => prevGood + 1);
  };

  const badUpdete = () => {
    setBad(prevBad => prevBad + 1);
  };

  const neutralUpdete = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          goodUpdete={goodUpdete}
          badUpdete={badUpdete}
          neutralUpdete={neutralUpdete}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyle />
    </div>
  );
};
