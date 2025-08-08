import React from 'react';
import World from './World';
import StyledTheme from '../styles/StyledTheme';

const Hello = ({ isDark }) => {
  return (
    <>
      <StyledTheme thema={isDark}>Hello</StyledTheme>
      <World isDark={isDark} />
    </>
  );
};

export default Hello;
