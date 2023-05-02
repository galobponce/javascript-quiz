import { Question } from "."

import { useGameStore } from "../store/game"

export const Game = () => {
  const questions = useGameStore((state) => state.questions)
  const currentQuestion = useGameStore((state) => state.currentQuestion)

  return <Question question={questions[currentQuestion]} />
}
