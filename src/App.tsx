import { Stack } from "@mui/material"

import { useGameStore } from "./store/game"
import { Game, Header, StartButton } from "./components"

const App = () => {
  const hasGameStarted = useGameStore((state) => state.hasGameStarted)

  return (
    <Stack
      py={3}
      bgcolor="#222222"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Header />

      {!hasGameStarted && <StartButton />}
      {hasGameStarted && <Game />}
    </Stack>
  )
}

export default App
