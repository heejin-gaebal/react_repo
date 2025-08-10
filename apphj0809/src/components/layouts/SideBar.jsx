import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledSideBar = styled("div")`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-280px'};
  width: 250px; height: 100vh;
  background-color: #f5f3ff;
  border-right: 2px solid #e4def8;
  padding: 20px; z-index: 1000;
  transition: left 0.3s ease;
  box-shadow: ${props => props.isOpen ? '2px 0 10px rgba(0,0,0,0.1)' : 'none'};
  padding-top: 100px;

  h2{
    text-align: center;
    color: #b4a6eb; font-size: 48px; margin: 0 0 20px;
      text-shadow: 2px 3px 0 #3d2c7b, -3px 0px 0 #3d2c7b, 2px -2px 0 #3d2c7b, -1px 2px 0 #3d2c7b;
  }

  ul {
    list-style: none;
    padding: 0; margin: 0;
  }

  li {
    padding: 12px 16px;
    margin-bottom: 8px;
    background-color: #e4def8;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: #3d2c7b; font-weight: 600;
    margin-bottom: 30px; text-align: center;

    &:hover {background-color: #d6cefc;}
    & > a{text-decoration:none; font-size:18px; 
      &:active{color: #3d2c7b;}
    }
  }

  /* 닫기 버튼 (선택사항) */
  .close-btn {
    position: absolute;
    top: 20px;
    right: 15px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #3d2c7b;
    padding: 5px;
    
    &:hover {color: #b4a6eb;}
  }
`;

const SideBar = ({isOpen, onClose}) => {
  return (
    <StyledSideBar isOpen={isOpen}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <h2>MY MENU</h2>
      <ul>
        <li><Link to="/main" onClick={onClose}>HOME</Link></li>
        <li><Link to="/main/diary/list" onClick={onClose}>갤러리</Link></li>
        <li><Link to="/main/diary/list" onClick={onClose}>다이어리 목록</Link></li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;