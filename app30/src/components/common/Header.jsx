import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import ThemeSwitch from '../util/ThemeSwitch';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';

const LayoutDiv = styled('div')`
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 1fr;
  place-items: center center;
  background-color: ${(props) => {
    return props.theme.palette.primary.main;
  }};
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <LayoutDiv>
      <div>
        <div className="jelly-box"></div>
        <div className="jelly-box-shadow"></div>
      </div>
      <h1 className="glow">WELCOME</h1>
      <ThemeSwitch
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </LayoutDiv>
  );
};

export default Header;
