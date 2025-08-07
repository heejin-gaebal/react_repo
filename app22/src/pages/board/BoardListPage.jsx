import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BoardList from '../../components/board/BoardList';

const BoardListPage = () => {
  return (
    <>
      <Header />
      <BoardList />
      <Footer />
    </>
  );
};

export default BoardListPage;
