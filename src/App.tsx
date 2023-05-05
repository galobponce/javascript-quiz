import { Stack } from "@mui/material"

import { useGameStore } from "./store/game"
import { Game, StickyHeader, StartButton, StartHeader } from "./components"

const App = () => {
  const hasGameStarted = useGameStore((state) => state.hasGameStarted)

  return (
    <>
      {hasGameStarted && <StickyHeader />}

      <Stack
        py={2}
        bgcolor="#222222"
        // Uses all viewport height when game has not started so the content is vertically centered
        height={!hasGameStarted ? "80vh" : "unset"}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        {!hasGameStarted && (
          <>
            <StartHeader />
            <StartButton />
          </>
        )}

        {hasGameStarted && <Game />}
      </Stack>
    </>
  )
}

export default App
