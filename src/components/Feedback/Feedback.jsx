import React, { useState } from 'react';

export const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <h1>Please leave feeback</h1>
      <button className="" type="button" onClick={() => handleFeedback('good')}>
        Good
      </button>
      <button
        className=""
        type="button"
        onClick={() => handleFeedback('neutral')}
      >
        Neutral
      </button>
      <button className="" type="button" onClick={() => handleFeedback('bad')}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </>
  );
};
