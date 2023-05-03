import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Dificulties, IQuestion } from "../types"
import { getAllQuestionsByDificulty } from "../services"

interface GameState {
  hasGameStarted: boolean
  questions: IQuestion[]
  currentQuestion: number
  startGame: () => void
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, userAnswerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  clearGameProgress: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        hasGameStarted: false,

        startGame: () => {
          set({ hasGameStarted: true })
        },

        fetchQuestions: async (limit) => {
          const jsonQuestions = await getAllQuestionsByDificulty(
            Dificulties.INTERMEDIATE
          )

          // Disorder questions and select limited
          const questions = jsonQuestions
            .sort(() => Math.random() - 0.5)
            .slice(0, limit)
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

        clearGameProgress: () => {
          set({
            questions: [],
            currentQuestion: 0,
            hasGameStarted: false,
          })
        },
      }
    },
    {
      name: "game",
    }
  )
)
