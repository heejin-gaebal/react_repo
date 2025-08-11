import { useDispatch, useSelector } from 'react-redux';
import { boardInsert } from '../../redux/boardSlice';

const BoardInsertPage = () => {
  const { title, content } = useSelector((state) => {
    return state.board;
  });

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(boardInsert());
  };

  return (
    <>
      <h1>Board Insert</h1>
      <form
        onSubmit={() => {
          localStorage.setItem({ title, content });
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="제목 입력"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용 입력"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="등록하기" />
      </form>
    </>
  );
};

export default BoardInsertPage;
