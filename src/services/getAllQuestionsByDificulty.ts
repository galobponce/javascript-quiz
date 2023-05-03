import { Dificulties } from "../types"

export const getAllQuestionsByDificulty = async (dificulty: Dificulties) => {
  const res = await fetch(`../../${dificulty}.json`)
  return await res.json()
}
