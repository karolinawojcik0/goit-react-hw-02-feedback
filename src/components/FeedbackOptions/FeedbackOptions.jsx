import React from 'react';
import { Button, FeedbackOpt } from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOpt>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </FeedbackOpt>
  );
};
