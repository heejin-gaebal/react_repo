import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 1200px;
  height: 92%;
  background-color: #fff;
  padding: 30px;
  margin: auto;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
`;

const Content = () => {
  return (
    <StyledContent>
        <Outlet/>
    </StyledContent>
  );
};

export default Content;
