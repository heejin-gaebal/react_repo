import styled from 'styled-components';

const StyleHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 1fr;
  text-align: center;
  background-color: #f8d7e2;
`;

const Header = () => {
  return (
    <StyleHeader>
      <h3>Welcome REACT</h3>
      <h3>Mypage</h3>
    </StyleHeader>
  );
};

export default Header;
