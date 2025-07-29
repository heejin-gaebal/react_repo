import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Layout>
      <strong>연락처 : 010-1234-5678</strong>
      <strong>오시는길 : 서울시 강남구</strong>
      <strong>copyright:&copy;</strong>
    </Layout>
  );
};

export default Footer;
