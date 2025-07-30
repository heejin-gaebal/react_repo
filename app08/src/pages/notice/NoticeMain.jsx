import { useState } from 'react';

const NoticeMain = () => {
  //객체로 한꺼번에 관리
  const [noticeVo, setNoticeVo] = useState({});
  const [storageVoList, setStorageVoList] = useState([]);
  //...noticeVo가 저 state객체의 noticeVo를 가져오는거면 noticeVo의 어떤걸 가져오는건가여
  //[evt.target.name]처럼 문자열인데 변수나 객체로 취급하려고
  //[noticeVo, setNoticeVo] = useState []를 사용?

  // => 구조문의 할당
  // 객체안의 여러개의 속성을 한꺼번에 꺼냄
  // const {title, content, enrollDate, delYn, hit} = boardVo;
  //
  // const arr = [10,20,30];
  // const a = arr[0];
  // const b = arr[1];
  // const c = arr[2];
  // const [a,b,c] = arr;

  // function f01(){
  //  return [10,20,30]
  //  return [10,20,30,함수,객체,문자열,불린 ...]
  //  return [10,20,30,()=>{}]
  // };
  //const [a,b,c] = f01();
  //const [a,b,c,d] = f01();

  /* 
    useState : 변수를 만듬
    useState(x) : 초기값 셋팅
    useState({}) : 객체 셋팅
    useState([]) : 배열 셋팅
  */

  function handleSubmit(evt) {
    evt.preventDefault(); //기본이벤트 막기

    let noticeVoList = localStorage.getItem('noticeVoList');
    if (noticeVoList === null) {
      noticeVoList = [];
    } else {
      noticeVoList = JSON.parse(localStorage.getItem('noticeVo'));
    }
    noticeVoList.push(noticeVo);
    localStorage.setItem('noticeVoList', JSON.stringify(noticeVoList));
  }

  function handleFormChange(evt) {
    setNoticeVo({
      /*
       * 객체를 갈아끼우는데 값이 덮어씌워지고 title이 될지 content가 될지모르므로
       * title: noticeVo.title
       * content: noticeVo.content
       * 기존값을 유지하기위해 기존값을 가진 noticeVo를 전개연산자로 사용
       */
      ...noticeVo,
      [evt.target.name]: evt.target.value,
      //키값은 무조건 문자열인데 변수로 취급하고 싶을때 [대괄호]를 사용함
      //noticeVo가 들고있는 데이터값을 활용해야하므로 스프레드......?
    });
  }

  // 게시글 조회
  function loadNotice() {
    setStorageVoList(JSON.parse(localStorage.getItem('noticeVoList')));
    console.log(storageVoList);
  }

  return (
    <>
      <h1>NOTICE</h1>
      <hr />
      <h2>Notice Insert</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={noticeVo.title}
          onChange={handleFormChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="컨텐츠 입력"
          value={noticeVo.content}
          onChange={handleFormChange}
        ></textarea>
        <br />
        <input type="submit" value={'공지사항 등록!'} />
      </form>
      <hr />

      <h2>Notice List</h2>
      <button onClick={loadNotice}>조회하자!</button>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {storageVoList.map((vo, idx) => {
            return (
              <tr>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default NoticeMain;
