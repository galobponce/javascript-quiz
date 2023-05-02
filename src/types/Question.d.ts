export interface IQuestion {
  id: number
  text: string
  code: string
  answers: string[]
  correctAnswerIndex: number
  userSelectedAnswerIndex?: number
  isUserSelectedAnswerIndexCorrect?: boolean
}
