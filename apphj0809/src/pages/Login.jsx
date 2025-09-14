import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MyBtn from "../components/common/MyBtn";
import MyInput from "../components/common/MyInput";
import { useState } from "react";
import MySpin from "../components/common/MySpin";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

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
      color: #b4a6eb; font-size: 48px;
      text-shadow: 2px 3px 0 #3d2c7b, -3px 0px 0 #3d2c7b, 2px -2px 0 #3d2c7b, -1px 2px 0 #3d2c7b;
    }
    & form{
      & input{
        display: block; margin: auto auto 30px;
      }
    }
  }
`

const Login = () => {
  // 변경될 input값
  const [loginVo, setLoginVo] = useState({
    id : '',
    pwd : '',
  });
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);
  const navi = useNavigate();


  //form 
  function handleSubmit(evt){
    evt.preventDefault();
    
    //로딩 시작
    setIsLoading(true);

    setTimeout(() => {
      const str = localStorage.getItem("memberList");
      const memberList = str ? JSON.parse(str) : [];
      memberList.push(loginVo);
      localStorage.setItem("memberList", JSON.stringify(memberList));

      setIsLoading(false);
      Swal.fire("로그인 완료!");
      navi('/main');
    }, 1000);
  }
  
  //input값
  function handleChange(evt){
    setLoginVo({...loginVo , [evt.target.name] : evt.target.value})
  }

  return (
    <StyledLogin>
      <div className="loginbox">
        <h1>Pix Me</h1>
        <form onSubmit={handleSubmit}>
          <MyInput type="text" name="id" placeholder="아이디 입력" onChange={handleChange}/>
          <MyInput type="password" name="password" placeholder="패스워드 입력"  onChange={handleChange}/>
          <MyBtn type="submit">로그인</MyBtn><br/><br/>
          <Link to="/"><MyBtn>이전</MyBtn></Link>
          {isLoading ? <MySpin/> : false}
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;