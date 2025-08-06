import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <h1>
      <Link to={'/board/insert'}>Board Insert</Link>
      <br />
      <Link to={'/board/list'}>Board List</Link>
    </h1>
  );
};

export default HomePage;
