import React from 'react';
import PropTypes from 'prop-types';

function Input({
  title,
  placeholder,
  value,
  onChange,
  className,
  leftAddOn,
  name,
}) {
  return (
    <div className="my-5">
      {title && (
        <div className="text-sm text-slate-800 font-medium mb-1">{title}</div>
      )}
      <div className={leftAddOn ? 'flex w-64 md:w-96' : ''}>
        {leftAddOn && (
          <span className="py-2 px-4 bg-slate-100 text-slate-400 border border-r-0 rounded-tr-none rounded-br-none rounded-md">
            {leftAddOn}
          </span>
        )}
        <input
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  leftAddOn: PropTypes.node,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  title: null,
  placeholder: '',
  value: '',
  onChange: () => {},
  className: 'flex flex-1 border rounded-md py-2 px-4 w-80 md:w-96',
  leftAddOn: null,
};

export default Input;
