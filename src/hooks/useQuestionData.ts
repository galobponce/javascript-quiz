import { useGameStore } from "../store/game"

export const useQuestionData = () => {
  const questions = useGameStore((state) => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.map((question) => {
    const { isUserSelectedAnswerIndexCorrect } = question

    if (isUserSelectedAnswerIndexCorrect === undefined) unanswered++

    if (isUserSelectedAnswerIndexCorrect === false) incorrect++

    if (isUserSelectedAnswerIndexCorrect === true) correct++
  })

  return [correct, incorrect, unanswered]
}
