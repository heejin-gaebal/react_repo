import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import NoticeList from '../../components/notice/NoticeList';

const NoticeListPage = () => {
  return (
    <>
      <Header />
      <NoticeList />
      <Footer />
    </>
  );
};

export default NoticeListPage;
