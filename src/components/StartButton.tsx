import { Button } from "@mui/material"

import { useGameStore } from "../store/game"

export const StartButton = () => {
  const startGame = useGameStore((state) => state.startGame)
  const fetchQuestions = useGameStore((state) => state.fetchQuestions)

  const handleClick = () => {
    startGame()
    fetchQuestions(5)
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      ¡Comenzar!
    </Button>
  )
}
