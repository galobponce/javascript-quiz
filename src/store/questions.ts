import { create } from "zustand"
import { IQuestion } from "../types"

interface QuestionsState {
  questions: IQuestion[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<QuestionsState>((set) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit) => {
      const res = await fetch("../../intermediate.json")
      const json = await res.json()

      // Disorder questions and select limited
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },
  }
})
