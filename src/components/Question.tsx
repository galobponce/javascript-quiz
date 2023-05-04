import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import confetti from "canvas-confetti"
import SyntaxHighlighter from "react-syntax-highlighter"
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { IQuestion } from "../types"
import { useGameStore } from "../store/game"
import { getBackgroundColor } from "../utils"

export const Question = ({ question }: { question: IQuestion }) => {
  const selectAnswer = useGameStore((state) => state.selectAnswer)

  // Function that returns the function that the button 'onClick' event will use
  const createHandleClick = (userAnswerIndex: number) => () => {
    selectAnswer(question.id, userAnswerIndex)

    if (userAnswerIndex === question.correctAnswerIndex) confetti()
  }

  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", p: 2, mt: 4 }}>
      <Typography variant="h5" textAlign="center">
        {question.text}
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        wrapLongLines
        style={shadesOfPurple}
      >
        {question.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {question.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={question.userSelectedAnswerIndex != null}
              onClick={createHandleClick(index)}
              sx={{ bgcolor: getBackgroundColor(question, index) }}
            >
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
