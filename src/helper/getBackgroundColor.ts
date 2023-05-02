import { IQuestion } from "../types"

export function getBackgroundColor(question: IQuestion, answerIndex: number) {
  const { userSelectedAnswerIndex, correctAnswerIndex } = question

  // If the user has not selected yet
  if (userSelectedAnswerIndex == null) return "transparent"

  // If the user has selected AND this is the correct answer
  if (answerIndex === correctAnswerIndex) return "green"

  // If the user has selected THIS answer AND the answer is incorrect
  if (answerIndex === userSelectedAnswerIndex) return "red"

  return "transparent"
}
