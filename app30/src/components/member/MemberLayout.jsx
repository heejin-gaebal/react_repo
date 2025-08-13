import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 90%;
  height: 90%;
  background-color: #fff;
  border: 3px solid #cbafd8;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 200px 1fr;
  place-items: center center;
  & > *:nth-of-type(odd) {
    place-self: center center;
    font-size: 24px;
    font-weight: 500;
  }
  & > *:nth-of-type(even) {
    place-self: center start;
  }
  & input {
    width: 300px;
    height: 40px;
    font-size: 16px;
    border-radius: 10px;
  }
`;

const MemberLayout = () => {
  return (
    <StyledDiv>
      <Outlet />
    </StyledDiv>
  );
};

export default MemberLayout;
