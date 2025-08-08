import styled from 'styled-components';
const StyledTheme = styled.h1`
  background: ${({ thema }) => {
    return thema ? 'white' : 'black';
  }};
  color: ${({ thema }) => {
    return thema ? 'black' : 'white';
  }};
`;

export default StyledTheme;
