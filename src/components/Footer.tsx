import { Button, Stack, Typography } from "@mui/material"

import { useGameStore } from "../store/game"
import { useQuestionData } from "../hooks"

export const Footer = () => {
  const clearGameProgress = useGameStore((state) => state.clearGameProgress)
  const [correct, incorrect, unanswered] = useQuestionData()

  return (
    <Stack mt={5} gap={2} justifyContent="center" alignItems="center">
      <Typography fontWeight="bold">{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</Typography>
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
