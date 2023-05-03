import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Stack, IconButton, Typography } from "@mui/material"

import { useGameStore } from "../store/game"

export const Pagination = () => {
  const questions = useGameStore((state) => state.questions)
  const currentQuestion = useGameStore((state) => state.currentQuestion)
  const goNextQuestion = useGameStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useGameStore((state) => state.goPreviousQuestion)

  return (
    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
      <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
        <ArrowBackIosNew />
      </IconButton>

      <Typography>
        {currentQuestion + 1}/{questions.length}
      </Typography>

      <IconButton
        onClick={goNextQuestion}
        disabled={currentQuestion === questions.length - 1}
      >
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  )
}
