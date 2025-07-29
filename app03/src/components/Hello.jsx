import s from './Hello.module.css'; //css 별칭주기 [javascript 형태]
const Hello = () => {
  return <h1 className={s.target}>hello~~~</h1>;
  //자바스크립트 형태로 {}에 넣기
  //개발자도구에서는 <h1 class="Hello_target__dDafy">임의의 클래스 모듈로 정해짐
};

export default Hello;
