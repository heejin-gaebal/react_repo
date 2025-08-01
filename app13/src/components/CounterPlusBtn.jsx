import styled from 'styled-components';

const AwesomeBtn = styled.button`
  background: #f5bfcf;
  border: 1px solid #666;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background: #f8d3de;
  }
`;

const CounterPlusBtn = ({ num, setNum }) => {
  return (
    <>
      <AwesomeBtn
        onClick={() => {
          setNum(num + 1);
        }}
      >
        plus
      </AwesomeBtn>
    </>
  );
};

export default CounterPlusBtn;
