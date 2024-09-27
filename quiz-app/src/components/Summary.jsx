import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers = [] }) {
  let i = 0;
  const totalSkipped = userAnswers.filter((answer, i) => answer === null);
  const totalCorrect = userAnswers.filter((answer, i) => answer === QUESTIONS[i].answers[0]);

  const skippedAnswerShare = Math.round((totalSkipped.length / userAnswers.length) * 100);
  const correctAnswerShare = Math.round((totalCorrect.length / userAnswers.length) * 100);
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz complete" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer || "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
