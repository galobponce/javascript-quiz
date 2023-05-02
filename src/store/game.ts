import { create } from "zustand"

import { IQuestion } from "../types"

interface GameState {
  hasGameStarted: boolean
  questions: IQuestion[]
  currentQuestion: number
  startGame: () => void
  fetchQuestions: (limit: number) => Promise<void>
}

export const useGameStore = create<GameState>((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    hasGameStarted: false,

    fetchQuestions: async (limit) => {
      const res = await fetch("../../intermediate.json")
      const json = await res.json()

      // Disorder questions and select limited
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },

    startGame: () => {
      set({ hasGameStarted: true })
    },
  }
})
