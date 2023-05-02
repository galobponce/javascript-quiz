import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter"
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { IQuestion } from "../types"

export const Question = ({ question }: { question: IQuestion }) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", p: 2, mt: 4 }}>
      <Typography variant="h5">{question.text}</Typography>

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
            <ListItemButton>
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
