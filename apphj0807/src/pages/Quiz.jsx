import { useState } from 'react';
import ChoicBtn from '../components/ChoicBtn';
import styled from 'styled-components';

const StyledQuiz = styled.div`
  border: 2px solid #7f2fc7;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quest = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 80px;
`;
const questions = [
  {
    question: '친구들과 노는 걸 좋아하나요?',
    answers: { y: 'kuromi', n: 'melody' },
  },
  {
    question: '일기를 자주 쓰는 편인가요?',
    answers: { y: 'melody', n: 'kuromi' },
  },
  {
    question: '모험보다는 안정을 택하나요?',
    answers: { y: 'melody', n: 'kuromi' },
  },
  {
    question: '남들과 다른 나만의 개성을 중시하나요?',
    answers: { y: 'kuromi', n: 'melody' },
  },
  {
    question: '감정을 솔직하게 표현하는 편인가요?',
    answers: { y: 'kuromi', n: 'melody' },
  },
];

const Quiz = () => {
  const [num, setNum] = useState(1); //질문 카운트
  const [currentQuest, setcurrentQuest] = useState(0); //질문 순서
  const [score, setScore] = useState({ kuromi: 0, melody: 0 }); //쿠로미 vs 마이멜로디
  const [result, setResult] = useState('');

  function handleChoice(choice) {
    const character = questions[currentQuest].answers[choice];

    setScore((prev) => {
      const updated = {
        ...prev,
        [character]: prev[character] + 1,
      };

      if (currentQuest + 1 >= questions.length) {
        if (updated.kuromi > updated.melody) {
          setKuromi();
        } else {
          setMelody();
        }
      } else {
        setcurrentQuest(currentQuest + 1);
        setNum(num + 1);
      }
      return updated;
    });
  }

  function setKuromi() {
    setResult('당신은 쿠로미와 잘 어울려요 💜😈💜');
  }
  function setMelody() {
    setResult('당신은 마이멜로디와 잘 어울려요 🎀🐰🎀');
  }

  return (
    <StyledQuiz>
      <div>
        <Quest>
          질문 {num}. {questions[currentQuest].question}
        </Quest>
        <ChoicBtn str="그렇다" handleChoice={() => handleChoice('y')} />
        <ChoicBtn str="아니다" handleChoice={() => handleChoice('n')} />
        <h1>{result}</h1>
      </div>
    </StyledQuiz>
  );
};

export default Quiz;
