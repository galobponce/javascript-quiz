export interface IQuestion {
  text: string
  code: string
  answers: string[]
  correctAnswerIndex: number
  userSelectedAnswerIndex?: number
  isUserSelectedAnswerIndexCorrect?: boolean
}
