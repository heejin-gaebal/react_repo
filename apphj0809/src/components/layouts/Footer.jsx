import { styled } from "@mui/material/styles";

const StyledFooter = styled("footer")`
  background-color: #e0e0e0;
  padding: 0 30px; color: #666;
  display: flex; align-items: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;