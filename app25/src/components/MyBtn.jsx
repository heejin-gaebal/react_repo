import styled from 'styled-components';

const StyledBtn = styled.button`
  padding: 20px 30px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background-color: #c1f1e7;
`;

const MyBtn = ({ children }) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default MyBtn;
