import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #f8dadf;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
`;

const BoardInsertPage = () => {
  return (
    <Layout>
      <Header />
      <h1>게시글 작성페이지!!</h1>
      <Footer />
    </Layout>
  );
};

export default BoardInsertPage;
