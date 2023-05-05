import { Stack, Typography } from "@mui/material"

import { JavascriptLogo } from "."

export const StartHeader = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    gap={2}
    flexWrap="wrap"
  >
    <JavascriptLogo width={48} height={48} />
    <Typography variant="h3" component="h1" textAlign="center">
      Javascript Quiz
    </Typography>
  </Stack>
)
