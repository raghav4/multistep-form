import React from 'react';
import PropTypes from 'prop-types';

function Radio({
  htmlFor, name, text, Icon,
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>
        <input type="radio" name={name} id={htmlFor} />
        <div className="border rounded-md w-40 p-4 option-2">
          <Icon />
          <p>{text}</p>
        </div>
      </label>
    </div>
  );
}

export default Radio;

Radio.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.node,
};

Radio.defaultProps = {
  Icon: null,
};
