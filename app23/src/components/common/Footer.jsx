import styled from 'styled-components';

const StyleFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8ce0be;
  color: #000;
  font-size: 1.2em;
`;

const Footer = () => {
  return (
    <StyleFooter>
      <h3>Footer Section</h3>
    </StyleFooter>
  );
};

export default Footer;
