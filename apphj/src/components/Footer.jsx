import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #eec0c0;
`;

const Footer = () => {
  return (
    <Layout>
      <strong>연락처 : 010-1234-5678</strong>
      <strong>오시는 길 : 서울시 강남구</strong>
      <strong>copyright &copy;</strong>
    </Layout>
  );
};

export default Footer;
