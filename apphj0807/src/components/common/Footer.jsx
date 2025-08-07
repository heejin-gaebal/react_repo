import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfdfdf;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer>푸터영역</footer>
    </StyledFooter>
  );
};

export default Footer;
