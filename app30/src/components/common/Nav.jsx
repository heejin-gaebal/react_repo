import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NavItem from './NavItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, selectGallery, selectNotice } from '../../redux/navSlice';

const LayoutNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = () => {
  const { itemName } = useSelector((state) => {
    return state.nav;
  });

  const dispatch = useDispatch();

  return (
    <>
      <LayoutNav>
        <NavItem isSelected={itemName === 'board'}>
          <Link
            to={'/board/list'}
            onClick={() => {
              dispatch(selectBoard());
            }}
          >
            Board
          </Link>
        </NavItem>
        <NavItem isSelected={itemName === 'notice'}>
          <Link
            to={'/notice/list'}
            onClick={() => {
              dispatch(selectNotice());
            }}
          >
            Notice
          </Link>
        </NavItem>
        <NavItem isSelected={itemName === 'gallery'}>
          <Link
            to={'/gallery/list'}
            onClick={() => {
              dispatch(selectGallery());
            }}
          >
            Gallery
          </Link>
        </NavItem>
      </LayoutNav>
    </>
  );
};

export default Nav;
