import styled from 'styled-components';

const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainLayout = ({ children }) => {
  return <LayoutDiv>{children}</LayoutDiv>;
};

export default MainLayout;
