import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Header from '../../Header';
import Radio from '../../Radio';

function ThirdForm({ moveToNextStep, currentActiveRadio, handleOnChange }) {
  return (
    <div className="flex flex-col items-center">
      <Header
        title="How are you planning to use Eden?"
        subTitle="We'll streamline your setup experience accordingly."
      />
      <div className="input-radio flex justify-between px-3 my-4 w-96">
        <Radio
          htmlFor="option-1"
          name="option-1"
          isSelected={currentActiveRadio === 1}
          onClick={(e) => handleOnChange(e, 1)}
          icon={(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                currentActiveRadio === 1 ? 'text-indigo-600' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          )}
          title={(
            <>
              <h6 className="text-sm font-medium text-slate-900">For myself</h6>
              <p className="text-slate-400 text-sm">
                Write better. Think more clearly. Stay organized.
              </p>
            </>
          )}
        />
        <Radio
          htmlFor="option-2"
          name="option-2"
          isSelected={currentActiveRadio === 2}
          onClick={(e) => handleOnChange(e, 2)}
          icon={(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                currentActiveRadio === 2 ? 'text-indigo-600' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          )}
          title={(
            <>
              <h6 className="text-sm font-medium text-slate-900">For myself</h6>
              <p className="text-slate-400 text-sm">
                Write better. Think more clearly. Stay organized.
              </p>
            </>
          )}
        />
      </div>
      <Button onClick={moveToNextStep} disabled={!currentActiveRadio}>
        Create Workspace
      </Button>
    </div>
  );
}

ThirdForm.propTypes = {
  moveToNextStep: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  currentActiveRadio: PropTypes.number.isRequired,
};

export default ThirdForm;
