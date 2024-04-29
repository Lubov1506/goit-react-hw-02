import { useState } from "react"
import Description from "./components/Description/Description"
import FeedbackList from "./components/FeedbackList/FeedbackList"
import OptionsList from "./components/OptionsList/OptionsList"

function App() {
  const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
})

  return (
    <>
      <Description />
      <OptionsList />
      <FeedbackList/>
    </>
  )
}

export default App
