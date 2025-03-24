import { useState } from "react";
import styles from "../styles/MathChallenge.module.css";
import Divider from "./Divider";

export default function MathChallenge() {
  const [points, setPoints] = useState(0);
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  const operators = ["+", "-", "*", "/"];

  const generateChallenge = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const newOperator = operators[Math.floor(Math.random() * operators.length)];

    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(newOperator);

    let result;
    switch (newOperator) {
      case "+":
        result = newNum1 + newNum2;
        break;
      case "-":
        result = newNum1 - newNum2;
        break;
      case "*":
        result = newNum1 * newNum2;
        break;
      case "/":
        result = parseFloat((newNum1 / newNum2).toFixed(2));
        break;
      default:
        result = 0;
    }
    setCorrectAnswer(result);
  };

  const validateAnswer = () => {
    if (parseFloat(answer) === correctAnswer) {
      setPoints(points + 10);
      alert("Resposta correta! Você ganhou 10 pontos.");
    } else {
      alert("Resposta incorreta. Tente novamente!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Você tem {points} pontos</h1>
      <button className={styles.drawButton} onClick={generateChallenge}>
        Sortear Desafio
      </button>
      <Divider />
      {num1 !== null && num2 !== null && operator !== null && (
        <div className={styles.challengeSection}>
          <h2 className={styles.subtitle}>Quanto é :</h2>
          <div className={styles.numbersContainer}>
            <div className={styles.numberBox}>{num1}</div>
            <div className={styles.numberBox}>{operator}</div>
            <div className={styles.numberBox}>{num2}</div>
          </div>
          <h2 className={styles.subtitle}>Sua resposta :</h2>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={styles.answerInput}
          />
        </div>
      )}
      <div className={styles.buttonContainer}>
        <button className={styles.validateButton} onClick={validateAnswer}>
          Validar
        </button>
        <button
          className={styles.newGameButton}
          onClick={() => {
            setPoints(0);
            setNum1(null);
            setNum2(null);
            setOperator(null);
            setAnswer("");
            setCorrectAnswer(null);
          }}
        >
          Novo Jogo
        </button>
      </div>
    </div>
  );
}
