import type { FC } from "react"
import type { ContactObject } from "../../types/ContactObject"
import { Box, Card, CardContent, Typography } from "@mui/material"
import styles from "./contactCard.module.css"

interface Props {
  contact: ContactObject
}

export const ContactCard: FC<Props> = ({ contact }: Props) => {
  return (
    <>
      <Card className={styles.contactCard} sx={{ borderRadius: "15px" }}>
        <CardContent className={styles.contactCardContent}>
          <Box className={styles.cardFirstLine}>
            {contact.icon}
            <h3 className={styles.contactTitle}>{contact.title}</h3>
          </Box>
          {contact.content}
        </CardContent>
      </Card>
    </>
  )
}
