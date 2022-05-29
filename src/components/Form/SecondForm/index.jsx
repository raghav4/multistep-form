import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';

function SecondForm({
  workspaceName,
  workspaceUrl,
  handleOnChange,
  moveToNextStep,
}) {
  return (
    <>
      <Header
        title="Let's setup a home for all your work"
        subTitle="You can always create another workspace later."
      />
      <div>
        <Input
          title="Workspace Name"
          name="workspaceName"
          placeholder="Eden"
          value={workspaceName}
          onChange={handleOnChange}
        />
        <Input
          title={(
            <>
              Workspace URL
              <span className="text-slate-300 font-normal"> (optional)</span>
            </>
          )}
          placeholder="Example"
          leftAddOn="www.eden.com/"
          name="workspaceUrl"
          value={workspaceUrl}
          onChange={handleOnChange}
          className="border rounded-md rounded-tl-none rounded-bl-none py-2 px-4 flex-1 w-40 md:w-96"
        />
        <Button
          onClick={moveToNextStep}
          disabled={!workspaceName || !workspaceUrl}
        >
          Create Workspace
        </Button>
      </div>
    </>
  );
}

SecondForm.propTypes = {
  workspaceName: PropTypes.string.isRequired,
  workspaceUrl: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  moveToNextStep: PropTypes.func.isRequired,
};

export default SecondForm;
