import css from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positivePercent }) {
  return (
    <ul className={css.feedback}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positivePercent}%</li>
    </ul>
  );
}

export default Feedback;
