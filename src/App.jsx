import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import OptionsList from "./components/OptionsList/OptionsList";
import Notification from "./components/Notification/Notification";
import Container from "./components/Container/Container";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

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
