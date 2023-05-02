import { Stack } from "@mui/material"

import { Header, StartButton } from "./components"

const App = () => {
  return (
    <Stack
      bgcolor="#222222"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Header />
      <StartButton />
    </Stack>
  )
}

export default App
