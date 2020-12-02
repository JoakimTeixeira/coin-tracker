import React from 'react';

const Header = () => (
  <header>
    <h1 className="title text-center text-warning pt-5 mb-5">
      <i className="fas fa-coins" />
      <span className="text-white">
        <span style={{ fontWeight: 'lighter' }}>{' Coin '}</span>
        Tracker
      </span>
    </h1>
  </header>
);

export default Header;
