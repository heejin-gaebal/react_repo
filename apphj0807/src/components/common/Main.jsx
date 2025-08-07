import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Content from './Content';
import { Route, Routes } from 'react-router-dom';

const StyledMain = styled.main`
  display: flex;

  & aside {
    width: 15%;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  & #content {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Aside />
      <Routes>
        <Route path="*" element={<Content />}>
          <Route path="menu1" element />
          <Route path="menu2" />
          <Route path="menu3" />
        </Route>
      </Routes>
    </StyledMain>
  );
};

export default Main;
