import React from 'react';
import Footer from '../components/Footer';
import BoardListMain from '../components/BoardListMain';
import Header from '../components/Header';

const BoardList = () => {
  return (
    <div>
      <>
        <Header />
        <BoardListMain></BoardListMain>
        <Footer></Footer>
      </>
    </div>
  );
};

export default BoardList;
