import { styled } from "@mui/material/styles";
import MyProfile from "../MyProfile";
import { Outlet } from "react-router-dom";

const StyledMain = styled("div")`
padding: 20px;
display: flex;
justify-content: space-evenly;
gap: 20px;
`

const Main = () => {
  return (
    <StyledMain>
      <MyProfile/>
      <Outlet/>
    </StyledMain>
  );
};

export default Main;