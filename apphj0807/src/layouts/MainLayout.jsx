import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Main from '../components/common/Main';
import styled from 'styled-components';
const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5eaff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header />
      <Main />
      <Footer />
    </LayoutDiv>
  );
};

export default MainLayout;
