import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useState, useEffect } from 'react';
import myImage from '../images/heejin.png';
import career01 from '../images/career01.png';
import career02 from '../images/career02.png';
import career03 from '../images/career03.png';
import career04 from '../images/career04.png';
import career05 from '../images/career05.png';
import career06 from '../images/career06.png';
import semi01 from '../images/semi01.png';
import semi02 from '../images/semi02.png';
import semi03 from '../images/semi03.png';
import semi04 from '../images/semi04.png';
import semi05 from '../images/semi05.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import PinInvokeRoundedIcon from '@mui/icons-material/PinInvokeRounded';

const StyledLayout = styled("div")`
  width: 100%;
  height: 100vh;
  padding: 1% 3%;
  background: #e3f1ff;
  .contentsWrap{
    display: grid;
    grid-template-columns: 35% 1fr;
    gap: 50px;
  }
  .home{
    color: #0a345d; margin-bottom: 20px; text-align: right;
    a{
      text-decoration: none;
      color: inherit;
    }
    .css-dskzcr-MuiSvgIcon-root{
      border: 2px dashed #0a345d; border-radius: 50%;
      transition: transform 0.5s ease-in-out;
      &:hover{
        transform: rotate(360deg);
      }
    }
  }

  .myInfo{
    transform: translateY(50px); opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out; text-align: center;
    &.up {
        transform: translateY(0); opacity: 1;
    }

    h1{
      color:#0a345d; font-size: 40px; font-weight: 400;
      margin-top: 0;
      &.left{text-align:left;}
      &.right{text-align:right;}
      span{color:#000; border-bottom: 2px dashed #000; font-weight: 600;}
    }
    a{
      text-decoration:none; font-weight: 600;
      font-size: 20px; color: #0a345d;
      &:hover{
        text-decoration:underline #0a345d;
      }
    }
  }
  .my_skill{
    display:flex; gap: 50px;
    background: #fff; padding: 4% 35px;
    box-shadow: 2px 2px 7px #5b7893;
    transform: translateY(-50px); opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    &.down {
        transform: translateY(0); opacity: 1;
    }
    & > div{width:50%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      &:last-of-type{
        dl{
          justify-content: flex-start;
          dt{min-width: 180px;}
        }
      }
    }
    .skillBox{
      margin-bottom: 30px;
      h3{
        font-size: 25px; color: #0a345d;
        text-shadow: 1px 1px 3px #4399f5;
      }
      dl{
        display:flex; justify-content: space-between;
        dt{font-weight: 600;}
      }
    }
  }
`
const Intro = styled("div")`
  width: 100%;
  height: 100vh;
  padding: 3%;
  background: #c4e1fd;
  color: #000;
  &>div{
    max-width: 1050px;
    margin: auto;
    h1{
      color: #0a345d;
      text-shadow: 1px 1px 3px #4399f5;
    }
  }
  .introBox{
    background: rgba(255, 255, 255, 0.5);
    padding: 10px 20px;
    margin-bottom: 30px;
    border-radius: 10px;

    opacity: 0;
    transform: translateY(50px); /* 아래에서 올라오는 느낌 */
    transition: all 0.8s ease-out;
    &.show {
      opacity: 1;
      transform: translateY(0);
    }
    h2{
      margin: 0;
    }
    span{
      background: #7fbefb;
      padding: 1px 5px;
      border-radius: 3px;
      font-weight: 600;
      color: #000;
    }
  }
`
const Career = styled("div")`
  width: 100%;
  height: 100vh;
  padding: 3%;
  background: #e3f1ff;
  color: #000;

  .tapWrap{
    justify-content: space-between;
    .tablist{
      font-size: 18px;
    }
    .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected{font-weight: 600;}
  }
  .css-19kzrtu {
      padding: 20px 0;
  }
  .projectWrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px 20px;
    .projectBox{
      width: 32%;
      border-radius: 10px;
      text-align: center;
      img{
          width : -webkit-fill-available;
        }
      p{
        margin: 0;
      }
      .btn{
        width: 100%;
        padding: 10px 20px;
        margin-top: 10px;
        background: #75ade9;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        transition: ease-in-out 0.2s;
        a{
          text-decoration: none;
          color: #000;
          width: 100%;
          display: inline-block;
        }
        &:hover{
          background: #fff;
          border: 1px solid #4399f5;
        }
      }
    }
  }
`
const BtnTop = styled("p")`
  position: fixed;
  right: 4%;
  width: 48px;
  bottom: 8%;
  text-align: center;
  line-height: 1.2;
  color: #0a345d;
  margin: 0px;
  border: 2px dashed #0a345d;
  border-radius: 50%;
  transition: ease-in-out 0.2s;
  &:hover{
    bottom: 8.5%;
  }
`
function handleTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤 효과
  });
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const boxes = document.querySelectorAll(".introBox");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, idx * 200); // 순차적으로 올라오게 (0.2초 간격)
          }
        });
      },
      { threshold: 0.7 } // 70% 보이면 트리거
    );

    boxes.forEach((box) => observer.observe(box));

    const timer = setTimeout(() => {
        setAnimate(true);
    }, 100);

    return () => {
        clearTimeout(timer);
        observer.disconnect();
      }
    },[]);
  return (
    <>
      <StyledLayout>
        <div className="home"><Link to="/"><HomeRoundedIcon sx={{ fontSize: 40 }}/></Link></div>
        <div className="contentsWrap">
          <div className={`myInfo ${animate ? 'up' : ''}`}>
            <h1 className="left">소통하며 배우고, 강단있게 성장하는<h1 className="right"><span>박희진</span>입니다.</h1></h1>
            <img src={myImage} alt="박희진" />
            <Link to="https://www.notion.so/KH-1c86bd250d6780c9af81c4e0e0f9923b" target="_blank">My Notion<PinInvokeRoundedIcon/></Link>
          </div>
          <div className={`my_skill ${animate ? 'down' : ''}`}>
            <div>
              <div className="skillBox">
                <h3>ABOUT ME</h3>
                <dl>
                  <dt>Name</dt>
                  <dd>박희진 Park Hee Jin</dd>
                </dl>
                <dl>
                  <dt>Birth</dt>
                  <dd>1994. 11. 30</dd>
                </dl> 
                <dl>
                  <dt>Contact</dt>
                  <dd>pheejin603@gmail.com</dd>
                </dl> 
              </div>
              <div className="skillBox">
                <h3>EDUCATION</h3>
                <dl>
                  <dt>한국방송통신대학교 졸업</dt>
                  <dd>2025. 02</dd>
                </dl>
                <dl>
                  <dt>한성여자고등학교 졸업</dt>
                  <dd>2013. 02</dd>
                </dl>
                <hr />
                <dl>
                  <dt>AWS 클라우드 기반 Devops 개발자양성 과정</dt>
                  <dd>2025. 04 ~ 2025.10</dd>
                </dl>
                <dl>
                  <dt>이젠아카데미 모바일웹&앱 퍼블리싱 과정 수료</dt>
                  <dd>2020. 05 ~ 2020.10</dd>
                </dl>
              </div>
              <div className="skillBox">
                <h3>CAREER</h3>
                <dl>
                  <dt>SJ Technology 에스제이테크놀러지</dt>
                  <dd>2020.11 ~ 2025.04<br/>4년 4개월 대리직 퇴사</dd>
                </dl>
              </div>
            </div>
            <div>
              <div className="skillBox">
                <h3>SKILL</h3>
                <dl>
                  <dt>Web Front End</dt>
                  <dd>React, HTML5, CSS3, SCSS, JQuery, BootStrap</dd>
                </dl>
                <dl>
                  <dt>Web Back End</dt>
                  <dd>SpringBoot, Spring Data JPA, JSP&Servlet, MyBatis, Apache Tomcat</dd>
                </dl>
                <dl>
                  <dt>Language</dt>
                  <dd>JAVA, Javascript, SQL</dd>
                </dl>
                <dl>
                  <dt>DB</dt>
                  <dd>Oracle, PostgreSQL, AWS</dd>
                </dl>
                <dl>
                  <dt>Tool</dt>
                  <dd>IntelliJ, Eclipse, VSCode, Git, SourceTree, Notion, Slack</dd>
                </dl>
              </div>
              <div className="skillBox">
                <h3>LICENSE</h3>
                <dl>
                  <dt>정보처리기사(필기)</dt>
                  <dd>2024.08.08</dd>
                </dl>
                <dl>
                  <dt>SQLD</dt>
                  <dd>2022.12</dd>
                </dl>
                <dl>
                  <dt>자동차운전면허</dt>
                  <dd>2019.08</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>      
      </StyledLayout>
      <Intro>
        <div>
          <h1>I AM</h1>
          <div className="introBox">
            <h2>MY GOAL</h2>
            <p>
              웹퍼블리셔로 4년간 재직을 하면서 웹디자이너와의 소통도 중요하지만,<br/>
              프로젝트를 완성도 높게 이끌어가기 위해서는 웹 개발자들과의 협업이 정말 중요하다고 생각합니다.<br/>
              Back-End 관련 공부도 이어가며 <span>Back-End 개발자들과 교류가능한 Front-End 개발자</span>의 자질을 갖춘 인재로 거듭났습니다.<br/>
              이제까지 경험한 Back-End 개발자들과의 협업과 앞으로 더 발전할 Back-End 스킬도 갈고 닦아서 나아가 <span>Full-Stack 개발자가 되는것이 제 목표입니다.</span>
            </p>
          </div>
          <div className="introBox">
            <h2>WORK POINT</h2>
            <p>
              일하는데에 있어서 중요한 point는 <strong>성실함</strong>이라고 생각합니다.<br/> 
              전 모든 업무 성과는 '태도에서 비롯된다'고 생각하는 사람이고, 완벽한 사람은 없으니 성실함으로서 단점을 보완해야한다고 생각합니다.<br/>
              <span>실수를 하더라도 그것을 바로잡을 힘은 성실함</span>에 있다고 생각합니다.<br/> 
            </p>
            <p>
              두번째는 <strong>유연과 강단</strong>입니다.<br/>
              퍼블리셔로 재직하면서 매번 프로젝트가 달랐고, 매번 고객이 달랐으며, 파견가게 되면 환경도 달랐습니다.<br/>
              하지만, 낯선 환경에서도 당장 무엇을 해야하는지 생각해야했으며, 유동적으로 바뀐환경에 적응해야했습니다.<br/>
              <span>유연하게 환경에 대응하면서도, 내가 어떻게 이 프로젝트에 참여해야하는지를 아는 것이 정말 중요</span>하다고 생각합니다.
            </p>
          </div>
          <div className="introBox">
            <h2>MY STRENGTH</h2>
            <p>
              저는 소통을 정말 중요하게 생각합니다. 저에겐 타인의 의견을 존중할 수 있는 힘이 있으며,<br/>
              <span>피드백 또한 열린 마음으로 감사하게 여기며 동료와의 이야기를 실현하려고 노력합니다.</span><br/>
              Front 스킬에 비해 부족한 Back 스킬을 발전시키기 위해 개발자 과정을 수료중에 있고, <br/>
              수료 후 더 성장해서 프로젝트가 어떤 방향으로 흘러가는지 정확히 파악할 수 있는 개발자가 될 수 있다고 자신합니다.
            </p>
          </div>
        </div>
      </Intro>
      <Career>
        <div className="CareerWrap">
          <Box sx={{ width: '1050px; margin:auto; ' }}>
          <h1>Career</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className="tapWrap" value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab className="tablist" label="Company" {...a11yProps(0)} />
                <Tab className="tablist" label="Academy" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="projectWrap">
                <div className="projectBox">
                  <img src={career01} alt="career01" />
                  <span>프로젝트 명 : <strong>금융위원회 인허가등록신고시스템</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>100%</strong></p>
                  <button className="btn"><Link to="https://www.fcsc.kr/ucms/main/main.do" target="_blank">자세히 보기</Link></button>
                </div>
                <div className="projectBox">
                  <img src={career02} alt="career02" />
                  <span>프로젝트 명 : <strong>KAB인정지원센터</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>100%</strong></p>
                  <button className="btn"><Link to="https://www.kab.or.kr/kor/main/main.do" target="_blank">자세히 보기</Link></button>
                </div>
                <div className="projectBox">
                  <img src={career03} alt="career03" />
                  <span>프로젝트 명 : <strong>SJTechnology</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>100%</strong></p>
                  <button className="btn"><Link to="http://www.sjtn.co.kr/" target="_blank">자세히 보기</Link></button>
                </div>
                <div className="projectBox">
                  <img src={career04} alt="career04" />
                  <span>프로젝트 명 : <strong>힌츠페터 국제보도상</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>80%</strong></p>
                  <button className="btn"><Link to="https://www.hinzpeterawards.com/main/main.do" target="_blank">자세히 보기</Link></button>
                </div>
                <div className="projectBox">
                  <img src={career05} alt="career05" />
                  <span>프로젝트 명 : <strong>W브릿지</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>50%</strong></p>
                  <button className="btn"><Link to="https://www.wbridge.or.kr/" target="_blank">자세히 보기</Link></button>
                </div>
                <div className="projectBox">
                  <img src={career06} alt="career06" />
                  <span>프로젝트 명 : <strong>전통공연예술진흥재단</strong></span>
                  <p><span>퍼블리싱 기여도 : </span><strong>50%</strong></p>
                  <button className="btn"><Link to="https://kotpa.org/ucms/main/indexmain.do" target="_blank">자세히 보기</Link></button>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <h2>SEMI PROJECT</h2>
              <p>
                사내 ERP시스템 구현을 목표로 기획부터 UI설계 웹개발까지 이룬 세미프로젝트입니다.<br/>
                ERD Cloud, Figma, IntelliJ를 이용해서 SpringBoot로 개발완료했습니다.
              </p>
              <div className="projectWrap" sx={{display: 'flex', justifyContent: 'center'}}>
                <div className="projectBox">
                  <img src={semi01} alt="semi01" />
                  <strong>01 UseCase</strong>
                </div>
                <div className="projectBox">
                  <img src={semi02} alt="semi02" />
                  <strong>02 Class Diagram</strong>
                </div>
                <div className="projectBox">
                  <img src={semi03} alt="semi03" />
                  <strong>03 ERD</strong>
                </div>
                <div className="projectBox">
                  <img src={semi04} alt="semi04" />
                  <strong>04 UI Design</strong>
                </div>
                <div className="projectBox">
                  <img src={semi05} alt="semi05" />
                  <strong>05 UI Design</strong>
                </div>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </Career>
      <BtnTop onClick={handleTop}><ArrowUpwardRoundedIcon sx={{ fontSize: 40 }}/></BtnTop>
    </>
  );
};

export default Portfolio;