import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Layout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr 200px;
  place-items: center center;
`;
const HomePage = () => {
  return (
    <Layout>
      <Header />
      <main>Main</main>
      <Footer />
    </Layout>
  );
};
export default HomePage;
