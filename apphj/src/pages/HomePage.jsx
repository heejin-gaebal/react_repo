import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 200px;
`;

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default HomePage;
