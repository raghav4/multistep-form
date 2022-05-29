import React, { useReducer } from 'react';

import {
  FirstWelcome,
  SecondForm,
  ThirdForm,
  FinalSuccess,
} from '../../components/Form';

function getCurrentStep(
  currentStep,
  state,
  handleOnChangeFormItem,
  moveToNextStep,
) {
  switch (currentStep) {
    case 1:
      return (
        <FirstWelcome
          fullName={state.fullName}
          displayName={state.displayName}
          handleOnChange={handleOnChangeFormItem}
          moveToNextStep={moveToNextStep}
        />
      );
    case 2:
      return (
        <SecondForm
          workspaceName={state.workspaceName}
          workspaceUrl={state.workspaceUrl}
          handleOnChange={handleOnChangeFormItem}
          moveToNextStep={moveToNextStep}
        />
      );
    case 3:
      return (
        <ThirdForm
          currentActiveRadio={state.currentActiveRadio}
          handleOnChange={handleOnChangeFormItem}
          moveToNextStep={moveToNextStep}
        />
      );
    case 4:
      return (
        <FinalSuccess
          moveToNextStep={moveToNextStep}
        />
      );
    default:
      return null;
  }
}

const initialState = {
  fullName: '',
  displayName: '',
  workspaceName: '',
  workspaceUrl: '',
  currentActiveFormStep: 1,
  currentActiveRadio: null,
};

function Onboarding() {
  const [state, dispatch] = useReducer(
    (current, updated) => ({ ...current, ...updated }),
    initialState,
  );
  const { currentActiveFormStep } = state;

  const handleOnChangeFormItem = (e, activeRadioValue = null) => {
    if (!activeRadioValue) {
      const { name, value } = e.target;
      dispatch({ [name]: value });
    } else {
      dispatch({ currentActiveRadio: activeRadioValue });
    }
  };

  const moveToNextStep = () => {
    dispatch({ currentActiveFormStep: (state.currentActiveFormStep % 4) + 1 });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src="https://i.imgur.com/29SzV7w.png"
        alt="Eden"
        width={150}
        height={100}
        className="my-3 mx-auto"
      />
      <ul className="mb-4">
        {[1, 2, 3, 4].map((item) => (
          <li
            key={item}
            className={`bg-indigo-600 ${
              item === currentActiveFormStep ? 'active' : ''
            }`}
          >
            <button
              type="button"
              className="btn"
              onClick={() => dispatch({ currentActiveFormStep: item })}
              style={{ height: '100%', width: '100%', outline: 'none' }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      {getCurrentStep(
        currentActiveFormStep,
        state,
        handleOnChangeFormItem,
        moveToNextStep,
      )}
    </div>
  );
}

export default Onboarding;
