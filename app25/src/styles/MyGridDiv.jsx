import styled from 'styled-components';

const MyGridDiv = styled.div`
  display: grid;
  grid-template-rows: ${({ r }) => {
    return `repeat(${r || 2}, 1fr)`;
  }};
  grid-template-columns: ${({ c }) => {
    return `repeat(${c || 2}, 1fr)`;
  }};
  /* default : 4칸 영역 */
  border: 3px solid #7dc4f3;
`;

export default MyGridDiv;
