import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 1px 1px 8px #ded3e9;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>로고</h1>
      <h1>welcome</h1>
      <h1>mypage</h1>
    </StyledHeader>
  );
};

export default Header;
