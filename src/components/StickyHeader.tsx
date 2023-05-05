import { Cached, Close, Delete, HighlightOff } from "@mui/icons-material"
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"

import { JavascriptLogo } from "."
import { useGameStore } from "../store/game"

export const StickyHeader = () => {
  const clearGameProgress = useGameStore((state) => state.clearGameProgress)

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton edge="start" aria-label="app-logo">
          <JavascriptLogo width={30} height={30} />
        </IconButton>
        <Typography variant="h6" component="h1">
          Javascript Quiz
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <Tooltip title="Close Game">
            <IconButton
              size="large"
              aria-label="Clear data"
              onClick={() => clearGameProgress()}
            >
              <Close color="action" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
