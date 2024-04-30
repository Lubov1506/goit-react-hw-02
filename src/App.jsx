import { useState } from "react";
import Description from "./components/Description/Description";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import OptionsList from "./components/OptionsList/OptionsList";
import Notification from "./components/Notification/Notification";
import Container from "./components/Container/Container";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Container>
        <Description />
        <OptionsList
          setFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          onReset={handleReset}
        />
        {totalFeedback > 0 ? (
          <FeedbackList
            total={totalFeedback}
            positive={positiveFeedback}
            feedback={feedback}
          />
        ) : (
          <Notification />
        )}
      </Container>
    </>
  );
}

export default App;
