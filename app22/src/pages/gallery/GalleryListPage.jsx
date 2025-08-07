import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import GalleryList from '../../components/gallery/GalleryList';

const GalleryListPage = () => {
  return (
    <>
      <Header />
      <GalleryList />
      <Footer />
    </>
  );
};

export default GalleryListPage;
