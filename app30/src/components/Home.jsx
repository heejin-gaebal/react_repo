import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';

const StyledHome = styled('div')`
  text-align: center;
`;

const Home = () => {
  const { loginMember } = useSelector((state) => {
    return state.member;
  });

  return (
    <StyledHome>
      <div>
        <h1>Home</h1>
        <h2>{loginMember.userNick}</h2>
      </div>
    </StyledHome>
  );
};

export default Home;
