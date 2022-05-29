import React from 'react';
import PropTypes from 'prop-types';

function Radio({
  htmlFor, isSelected, icon, title, name, onClick,
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>
        <input type="radio" name={name} id={htmlFor} onClick={onClick} />
        <div
          className={`cursor-pointer border rounded-md w-40 p-6 h-40 option-1 ${
            isSelected ? 'border-indigo-600' : ''
          }`}
        >
          {icon}
          {title}
        </div>
      </label>
    </div>
  );
}

Radio.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  isSelected: false,
  title: null,
  icon: null,
  onClick: () => {},
};

export default Radio;
