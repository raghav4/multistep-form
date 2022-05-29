import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick, children, colorClass, className, disabled,
}) {
  return (
    <button
      type="button"
      className={`${className} ${disabled ? 'bg-slate-200 cursor-no-drop' : colorClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  colorClass: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  colorClass: 'bg-indigo-600',
  className: 'text-white text-base py-2 px-4 my-4 rounded-md w-80 md:w-96',
  onClick: () => {},
  disabled: false,
};

export default Button;
