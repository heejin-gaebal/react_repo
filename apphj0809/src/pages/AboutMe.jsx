import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MyBtn from "../components/common/MyBtn";
import Swal from 'sweetalert2'
import { useState } from "react";
import MySpin from "../components/common/MySpin";
import { useNavigate } from "react-router-dom";

const StyledLogin = styled("div")`
  width: 100vw; height: 100vh;
  background: url(https://i.pinimg.com/originals/fd/40/a4/fd40a4b8b151c4e432106576187d03c9.gif) no-repeat 50%;
  background-size: cover;
  display: flex; justify-content: center; align-items: center;

  & .loginbox{
    width: 500px; height: 500px; border-radius: 10px;
    background:rgba(255,255,255,0.5);
    box-shadow: 3px 3px 3px #fff; text-align: center;
    display: flex; flex-direction: column; justify-content: center;

    & h1{
      color: #b4a6eb; font-size: 48px; margin-bottom: 0;
      text-shadow: 2px 3px 0 #3d2c7b, -3px 0px 0 #3d2c7b, 2px -2px 0 #3d2c7b, -1px 2px 0 #3d2c7b;
    }
    & .btnWrap{
        margin: 0 auto;
        min-width:300px;
      a{text-decoration:none}
      button{
        display: block; width: 100%; margin: 30px 0;
        font-size: 20px;
      }
    }
  }
`

const AboutMe = () => {
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);
  const navi = useNavigate();

  function handleClick(evt){
      evt.preventDefault();
      
      //로딩 시작
      setIsLoading(true);
  
      setTimeout(() => {
        setIsLoading(false);
        Swal.fire("환영합니다!");
        navi('/main');
      }, 1000);
    }

  return (
    <>
      <StyledLogin>
        <div className="loginbox">
          <h1>Pix Me</h1>
          <div className="btnWrap">
            <Link to="/about"><MyBtn>About Heejin</MyBtn></Link>
            <Link to="/main"><MyBtn onClick={handleClick}>Go to HJ's Home</MyBtn></Link>
            {isLoading ? <MySpin/> : false}
          </div>
        </div>
      </StyledLogin>
    </>
  );
};

export default AboutMe;