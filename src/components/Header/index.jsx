import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, subTitle }) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="text-slate-500 my-3 text-sm">{subTitle}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
