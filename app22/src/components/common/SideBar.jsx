import styled from 'styled-components';

const LayoutDiv = styled.div`
  width: 300px;
  height: auto;
  border: 3px solid #9994d8;
`;

const SideBar = () => {
  return (
    <>
      <LayoutDiv>
        <p>1번이야</p>
        <p>2번이야</p>
        <p>3번이야</p>
        <p>4번이야</p>
        <p>5번이야</p>
      </LayoutDiv>
    </>
  );
};

export default SideBar;
