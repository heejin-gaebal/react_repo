import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
const StyledHeader = styled("div")`
  background-color: #e4def8;
  display: flex;
  align-items: center; justify-content: space-between;
  padding: 0 30px;

  h1{
      & > a{
        color: #b4a6eb; font-size: 48px; margin: 0; text-decoration: none;
        text-shadow: 2px 3px 0 #3d2c7b, -3px 0px 0 #3d2c7b, 2px -2px 0 #3d2c7b, -1px 2px 0 #3d2c7b;
      }
    }
  
  button {
    padding: 8px 16px;
    background-color: #b4a6eb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 14px;

    &:hover {
      background-color: #9b8ce8; 
    }

    &.logout a{text-decoration: none; color: white;}
  }
  
`

const Header = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <StyledHeader>
      <button onClick={onToggleSidebar}>
        {sidebarOpen ? '닫기' : '메뉴보기'}
      </button>
      <h1> <Link to={"/main"}>heezy's Home</Link></h1>
      <button className="logout"><Link to={"http://localhost:3000/reactbuild"}>로그아웃</Link></button>
    </StyledHeader>
  );
};

export default Header;