import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #f8dadf;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Layout>
      {/* <strong>연락처</strong>
      <strong>오시는 길</strong>
      <strong>copyright &copy;</strong> */}
    </Layout>
  );
};

export default Footer;
