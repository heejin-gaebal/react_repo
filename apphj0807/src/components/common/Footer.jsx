import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebebeb;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer>copyright &copy; all rights reserved SANRIO CHARACTERS</footer>
    </StyledFooter>
  );
};

export default Footer;
