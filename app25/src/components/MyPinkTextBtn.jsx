import MyTypo from '../styles/MyTypho';
import MyBtn from './MyBtn';

const MyPinkTextBtn = ({ children }) => {
  return (
    <>
      <MyBtn>
        <MyTypo>{children}</MyTypo>
      </MyBtn>
    </>
  );
};

export default MyPinkTextBtn;
