import s from "./FeedbackList.module.css";
const FeedbackList = ({ total, positive, feedback }) => {
  return (
    <>
      <ul className={s.feedback_list}>
        {Object.entries(feedback).map((item, idx) => {
          const [key, value] = item;
          return (
            <li key={idx}>
              {key}: {value}
            </li>
          );
        })}
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
};

export default FeedbackList;
