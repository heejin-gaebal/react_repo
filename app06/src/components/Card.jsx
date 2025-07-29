import styled from 'styled-components';

const CardDiv = styled.div`
  width: 70px;
  height: 100px;
  border-radius: 5px;
  border: 2px solid #7372c9;
`;

const Card = ({ a, b }) => {
  return (
    <CardDiv>
      <span>{a}</span>
      <br />
      <span>{b}</span>
    </CardDiv>
  );
};

export default Card;
