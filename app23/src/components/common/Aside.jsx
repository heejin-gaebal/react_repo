import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleAside = styled.aside`
  background-color: #f7fde2;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    color: #000;
    padding-top: 50px;
    border-bottom: 2px dashed transparent;

    &:hover {
      color: gray;
      border-bottom: 2px dashed #000;
    }
  }
`;

const Aside = () => {
  return (
    <StyleAside>
      <Link to={'board/list'}>게시글 목록</Link>
      <Link to={'board/insert'}>게시글 등록</Link>
      <Link to={'notice/list'}>공지사항 목록</Link>
      <Link to={'notice/insert'}>공지사항 등록</Link>
    </StyleAside>
  );
};

export default Aside;
