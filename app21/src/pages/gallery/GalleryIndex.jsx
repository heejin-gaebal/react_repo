import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #fff;
  padding: 50px;
  box-sizing: border-box;
`;

const GalleryIndex = () => {
  return (
    <>
      <h1>Gallery Index</h1>
      <LayoutDiv>
        <Link to={'/main/gallery/list'}>Gallery List</Link>
        <br />
        <Link to={'/main/gallery/insert'}>Gallery Insert</Link>
        <Outlet />
      </LayoutDiv>
    </>
  );
};

export default GalleryIndex;
