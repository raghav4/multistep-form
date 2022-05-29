import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';

function FirstWelcome({
  fullName,
  displayName,
  handleOnChange,
  moveToNextStep,
}) {
  return (
    <>
      <Header
        title="Welcome! First things first..."
        subTitle="You can always change them later."
      />
      <div>
        <Input
          title="Full Name"
          name="fullName"
          value={fullName}
          placeholder="Please enter your full name"
          onChange={handleOnChange}
        />
        <Input
          title="Display Name"
          name="displayName"
          value={displayName}
          placeholder="Please enter your display name"
          onChange={handleOnChange}
        />
        <Button onClick={moveToNextStep} disabled={!fullName || !displayName}>
          Create Workspace
        </Button>
      </div>
    </>
  );
}

FirstWelcome.propTypes = {
  fullName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  moveToNextStep: PropTypes.func.isRequired,
};

export default FirstWelcome;
