import { Dificulties } from "../types"
import { baseUrl } from "../config/baseUrl"

export const getAllQuestionsByDificulty = async (dificulty: Dificulties) => {
  const res = await fetch(`${baseUrl}${dificulty}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const resJson = await res.json()
  return resJson
}
