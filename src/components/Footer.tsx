import { Stack, Typography } from "@mui/material"

import { useQuestionData } from "../hooks"

export const Footer = () => {
  const [correct, incorrect, unanswered] = useQuestionData()

  return (
    <Stack mt={5} justifyContent="center" alignItems="center">
      <Typography fontWeight="bold">{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</Typography>
    </Stack>
  )
}
