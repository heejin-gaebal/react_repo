import { styled } from "@mui/material/styles";
import { keyframes } from '@emotion/react';
const pic = keyframes`
  0% {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5px;
  }
  100% {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
  }
`

const Profile = styled('div')`
  width: 20%;
  border: 3px solid #755dcf;
  border-radius: 10px;
  position: relative;

  & .profile_info{
    width: 100%; height: 100%;
    border-radius: 7px;
    background: url(https://i.pinimg.com/736x/9d/1c/d9/9d1cd9fe2af330896d916d270f0f365a.jpg) no-repeat 50%;
    background-size: cover;
    position: relative;

    & .myPic{
        text-align: center;
        margin: auto;
        position: absolute;
        left: 50%;
        top: 9.5%;
        transform: translateX(-50%);
      img{
        width: 230px;
        height: 230px;
        object-fit: contain;
        animation: ${pic} 1s ease-in-out infinite;
      }
    }
  }

  & .myInfo{
    background: rgb(0 0 0 / 50%);
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0%;
    bottom: 0;
    text-align: center;
    padding: 30px;

    & > div{
      width: 100%; height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 30px;
      border-radius: 10px;

      & .myMent{
        padding: 10px 0;
        border: 3px dashed #755dcf;
        border-left: none; border-right: none;
        margin-bottom: 30px; background: #e4def8;
      }
      & dl{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        & dt{
          width: 80px;
          border-right: 1px dashed #755dcf;
        }
        dd{
          margin: 0;
          width: 80px;
        }
      }
    }
  }
`

const MyProfile = () => {
  return (
    <Profile>
      <div className="profile_info">
        <div className="myPic"><img src="https://wallpapers.com/images/hd/pixel-unicorn-girl-avatar-png-lfpx3e8aq6j6viyy.jpg" alt="" /></div>
      </div>
      <div className="myInfo">
        <div>
          <div className="myMent">내 미니홈피 와줘서 고마왕 (●'◡'●) </div>
          <dl>
            <dt>생일</dt>
            <dd>11/30</dd>
          </dl>
          <dl>
            <dt>별자리</dt>
            <dd>사수자리</dd>
          </dl>
          <dl>
            <dt>MBTI</dt>
            <dd>ENFP</dd>
          </dl>
        </div>
        
      </div>
    </Profile>
  );
};

export default MyProfile;