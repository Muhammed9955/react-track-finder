import React from 'react';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-dark bg-dark mb-5`}>
      <span className="navbar-brand mb-0 h1 mx-auto fas fa-music">
        {' '}
        Track Finder
      </span>
    </nav>
  );
};
const navStyle = {
  backgroundColor: '#e3f2fd'
};
export default Navbar;
