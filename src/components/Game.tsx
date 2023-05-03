import { useGameStore } from "../store/game"
import { Question, Pagination, Footer } from "."

export const Game = () => {
  const questions = useGameStore((state) => state.questions)
  const currentQuestion = useGameStore((state) => state.currentQuestion)

  return (
    <>
      <Pagination />
      <Question question={questions[currentQuestion]} />
      <Footer />
    </>
  )
}
