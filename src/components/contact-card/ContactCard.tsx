import type { FC } from "react"
import type { ContactObject } from "../../types/ContactObject"
import { Box, Card, Typography } from "@mui/material"
import styles from "./contactCard.module.css"

interface Props {
  contact: ContactObject
}

export const ContactCard: FC<Props> = ({ contact }: Props) => {
  return (
    <>
      <Card
        className={styles.contactCard}
        sx={{
          width: { sm: "18vw !important", xs: "90% !important" },
          padding: { sm: "1vw !important", xs: "2.5vh 2vw !important" },
        }}
      >
        <Box className={styles.cardFirstLine}>
          {contact.icon}
          <Typography variant="h6">{contact.title}</Typography>
        </Box>
        {contact.content}
      </Card>
    </>
  )
}
