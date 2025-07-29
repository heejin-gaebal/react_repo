import styles from './World.module.css';

const World = () => {
  return <h1 className={`${styles.a} ${styles.b}`}>WORLD 컴포넌트~~</h1>;
  // 여러개 적용하는 다른 방법
  // return <h1 className={[styles.a, styles.b].join(' ')}>WORLD 컴포넌트~~</h1>;
};

export default World;
