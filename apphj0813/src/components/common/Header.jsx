import { styled } from "@mui/material/styles";

const LayoutDiv = styled('div')`
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 1fr;
  place-items: center center;
  background-color: ${(props) => {
    return props.theme.palette.primary.main;
  }};
`;

const Header = () => {
  return (
    <LayoutDiv>
      header
    </LayoutDiv>
  );
};

export default Header;