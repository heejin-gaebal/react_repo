import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Swal from 'sweetalert2'

const Layout = styled.div`
  width: 100vw; height: 100vh;
  padding: 5%;   background: linear-gradient(#fff4fc, #f8def2);

  & > .wrap{
    width: 100%;
    min-height: 500px;
    border: 5px solid #fff;
    padding: 50px;

    & > h1 {
      font-size: 80px;color: #e41cb2;
      display: flex; justify-content: center;
      text-shadow: 6px 5px 11px #ffafeb;
      border-bottom: 3px dotted #e41cb2;
    }

    & form{
        text-align: center;
        & table{
        width: 100%;
        background: #fff;
        margin-bottom: 50px;
        border-top: 2px solid #e41cb2;
        border-bottom: 1px solid #ffafeb;

            & th,td{
                height: 40px;

                & input, textarea{
                    width: -webkit-fill-available;
                    height: -webkit-fill-available;

                }
            }
        }
        input[type=submit]{
            height: 50px;
            background: #f380d6;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            color: #fff;
            padding: 0 15px;
        }
        & > .boardLink{
            background: #4bc9e9;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            color: #fff;
            text-decoration: none;
            margin:0 20px;
            padding: 15px;
        }
        & > .home{
            background: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            color: #c473d8;
            text-decoration: none;
            padding: 15px;
        }
      }
    }
`;

const BoardInsert = () => {
    // 데이터 변경을 관리하는 state 
    const [city, setCity] = useState("");
    const [reason, setReason] = useState("");


    function handleSubmitBoard(evt){
        evt.preventDefault(); //기본이벤트 막기
        const vo = {
            city,
            reason,
        }

        const str = localStorage.getItem("voList");
        const voList = str ? JSON.parse(str) : [];
        voList.push(vo);

        localStorage.setItem("voList", JSON.stringify(voList));

        // or via CommonJS
        const Swal = require('sweetalert2')
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }

    function handleChangeCity(evt){
        setCity(evt.target.value);
    }

    function handleChangePurpose(evt){
        setReason(evt.target.value);
    }

    return (
        <Layout>
            <div className="wrap">
                <h1>My Wish</h1>

                <form onSubmit={handleSubmitBoard}>
                    <table>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <td><input type="text" name='city' placeholder='가고싶은 여행지' onChange={handleChangeCity}/></td>
                            </tr>
                            <tr>
                                <th>Purpose</th>
                                <td><textarea name="reason" placeholder='여행 목적' onChange={handleChangePurpose}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="내 리스트에 등록 ❤️"/>
                    <Link className='boardLink' to="/board/list">My Wish List📑</Link>
                    <Link className='home' to="/">Home 🏡</Link> 
                </form>
            </div>
        </Layout>
    );
};

export default BoardInsert;