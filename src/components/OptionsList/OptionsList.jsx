import Button from "../Button/Button";

const OptionsList = ({ setFeedback, totalFeedback, onReset }) => {
  return (
    <div>
      <Button onClick={() => setFeedback("good")}>Good</Button>
      <Button onClick={() => setFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => setFeedback("bad")}>Bad</Button>
      {totalFeedback > 0 && <Button onClick={onReset}>Reset</Button>}
    </div>
  );
};

export default OptionsList;
