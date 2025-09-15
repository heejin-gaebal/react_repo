import { Client } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';

const Chat = () => {
  const [msgList, setMsgList] = useState([]);
  const temp = useRef(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: `ws://127.0.0.1:8080/websocket`,
      //config에 설정한 웹소켓 경로
      onConnect: () => {
        //연결된 후 할 것
        console.log('웹소켓 연결됨');

        //데이터 읽어오기
        client.subscribe('/sub/echo', (msg) => {
          const data = JSON.parse(msg.body);
          setMsgList((prev) => [...msgList, data]);
        });
      },
    });

    client.activate(); //실행되라
    temp.current = client;

    return () => {
      if (temp.current) {
        temp.current.deacticate();
      }
    };
  });

  function sendMsg() {
    client.publish({
      destination: '/pub/topic',
      body: JSON.stringify({
        nick: 'heezy',
        msg: '히찌니',
      }),
    });
    //메시지 내보내기 인자값으로 어디로(destination) 어떤걸(body) 보낼건지
  }

  return (
    <>
      <h1>Chat</h1>
      <button onClick={sendMsg}>메시지 전송</button>
      <hr />
      {msgList.map((data, idx) => (
        <div key={idx}>
          {data.nick} : {data.msg}
        </div>
      ))}
    </>
  );
};

export default Chat;
