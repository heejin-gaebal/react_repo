import { Link } from 'react-router-dom';

const header = () => {
  return (
    <>
      <h1>Header</h1>
      <div>
        <Link to={'/board/list'}>BOARD</Link>
      </div>
    </>
  );
};

export default header;
