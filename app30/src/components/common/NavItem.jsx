import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const StyledDiv = styled('div')`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    //선택된 a태그에만 css주기
    ${(props) => {
      return props.isSelected ? 'border-bottom: 3px solid #47abc9;' : '';
    }}
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    font-weight: 600;
  }
`;

const NavItem = ({ children, isSelected }) => {
  return <StyledDiv isSelected={isSelected}>{children}</StyledDiv>;
};

export default NavItem;
