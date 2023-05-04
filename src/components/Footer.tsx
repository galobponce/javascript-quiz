import { Button, Stack, Typography } from "@mui/material"

import { useGameStore } from "../store/game"
import { useQuestionData } from "../hooks"

export const Footer = () => {
  const clearGameProgress = useGameStore((state) => state.clearGameProgress)
  const [correct, incorrect, unanswered] = useQuestionData()

  return (
    <Stack mt={{ sm: 2 }} gap={2} justifyContent="center" alignItems="center">
      <Stack flexDirection={{ sm: "row" }} gap={{ sm: 2 }}>
        <Typography fontWeight="bold">✅ {correct} correctas</Typography>
        <Typography fontWeight="bold">❌ {incorrect} incorrectas</Typography>
        <Typography fontWeight="bold">❓ {unanswered} sin responder</Typography>
      </Stack>
      <Button
        color="warning"
        variant="outlined"
        onClick={() => clearGameProgress()}
      >
        Clear Progress
      </Button>
    </Stack>
  )
}
