import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')`
  background-color: ${({ theme }) => {
    return theme.palette.primary.main;
  }};
  color: ${({ theme }) => {
    return theme.palette.primary.contrastText;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>footer</h1>
    </StyledFooter>
  );
};

export default Footer;
