import { Dificulties } from "../types"

export const getAllQuestionsByDificulty = async (dificulty: Dificulties) => {
  const res = await fetch(`/${dificulty}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const resJson = await res.json()
  return resJson
}
