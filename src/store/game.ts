import { create } from "zustand"

import { IQuestion } from "../types"

interface GameState {
  hasGameStarted: boolean
  questions: IQuestion[]
  currentQuestion: number
  startGame: () => void
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, userAnswerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
}

export const useGameStore = create<GameState>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    hasGameStarted: false,

    startGame: () => {
      set({ hasGameStarted: true })
    },

    fetchQuestions: async (limit) => {
      const res = await fetch("../../intermediate.json")
      const json = await res.json()

      // Disorder questions and select limited
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion >= questions.length) return

      set({ currentQuestion: nextQuestion })
    },

    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const nextQuestion = currentQuestion - 1

      if (nextQuestion < 0) return

      set({ currentQuestion: nextQuestion })
    },

    selectAnswer: (questionId, userAnswerIndex) => {
      const { questions } = get()

      const newQuestions = questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            userSelectedAnswerIndex: userAnswerIndex,
            isUserSelectedAnswerIndexCorrect:
              question.correctAnswerIndex === userAnswerIndex,
          }
        }
        return question
      })

      set({ questions: newQuestions })
    },
  }
})
