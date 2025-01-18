import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  return (
    <ul className={s.container}>
      <li className={s.subtitle}>Good: {feedback.good}</li>
      <li className={s.subtitle}>Neutral: {feedback.neutral}</li>
      <li className={s.subtitle}>Bad: {feedback.bad}</li>
    </ul>
  );
};
export default Feedback;
