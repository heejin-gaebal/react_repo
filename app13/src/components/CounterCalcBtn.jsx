import styled from 'styled-components';
import colors from '../styles/colors';

const AwesomeBtn = styled.button`
  background-color: ${({ bgc }) => bgc};
  /* bgc값이 없으면 기본컬러 yellow가 나오게 */
  border: 1px solid #666;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background: #b8e2cb;
  }
`;

const CounterCalcBtn = ({ str, f, bgc }) => {
  return (
    <>
      <AwesomeBtn bgc={bgc || colors.red[500]} onClick={f}>
        {str}
      </AwesomeBtn>
    </>
  );
};

export default CounterCalcBtn;
