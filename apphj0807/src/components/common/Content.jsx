import styled from 'styled-components';

const StyledContent = styled.div`
  width: 1400px;
  height: 80%;
  background-color: #fff;
  padding: 30px;
  margin: auto;
`;

const Content = () => {
  return (
    <StyledContent>
      <h1>컨텐츠 영역</h1>
    </StyledContent>
  );
};

export default Content;
