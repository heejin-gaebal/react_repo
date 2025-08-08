import { useState } from 'react';
import Hello from './Hello';
import StyledTheme from '../styles/StyledTheme';
import MyBtn from './MyBtn';

const Test03 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? '다크모드' : '라이트모드'}
      </button>
      <StyledTheme thema={isDark}>Light Theme</StyledTheme>
      <Hello isDark={isDark} />
    </>
  );
};

export default Test03;
