const FeedbackList = (feedback, total, positive) => {
  console.log(feedback);
  return (<>
      <ul>
      {Object.entries(feedback).map((item, idx) => {
        const [key, value] = item;
        return (
          <li key={idx}>
            {key[0].toUpperCase()}
            {key.slice(1)}: {value}
          </li>
        );
      })}

    </ul>
          {/* <p>Total: {total}</p>
      <p>Positive: {positive}%</p> */}
  </>

  );
};

export default FeedbackList;
