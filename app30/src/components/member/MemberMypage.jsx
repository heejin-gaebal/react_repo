import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/memberSlice';

const LayoutDiv = styled('div')``;

const MemberMypage = () => {
  const { loginMember } = useSelector((state) => {
    return state.member;
  });

  const dispatch = useDispatch();

  if (!loginMember?.userId) {
    //(객체?.v)Optional chaining : loginMember가 null인지 아닌지 검사 후 userId에 접근해라
    return (
      <>
        <div></div>
        <h1>로그인 후 마이페이지 접속이 가능해용</h1>
        <div></div>
        <h1>
          <Link to={'/member/join'}>회원가입</Link>
        </h1>
        <div></div>
        <h1>
          <Link to={'/member/login'}>로그인</Link>
        </h1>
      </>
    );
  }
  return (
    <LayoutDiv>
      <p>USER NO : {loginMember.no}</p>
      <p>USER ID : {loginMember.userId}</p>
      <p>USER PWD : {loginMember.userPwd}</p>
      <p>USER NICK : {loginMember.userNick}</p>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </LayoutDiv>
  );
};

export default MemberMypage;
