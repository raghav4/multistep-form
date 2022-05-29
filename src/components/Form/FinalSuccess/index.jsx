import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';
import Button from '../../Button';

function FinalSuccess({ moveToNextStep }) {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-block text-white p-5 mt-6 mb-4 rounded-full bg-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <Header
        title="Congratulations, Eren!"
        subTitle="You have completed onboarding, you can starting using the Eden!"
      />
      <Button onClick={moveToNextStep}>Launch Workspace</Button>
    </div>
  );
}

FinalSuccess.propTypes = {
  moveToNextStep: PropTypes.func.isRequired,
};

export default FinalSuccess;
