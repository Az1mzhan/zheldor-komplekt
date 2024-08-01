import { useContacts } from "../../hooks/useContacts/useContacts"
import { ContactCard } from "../contact-card/ContactCard"
import { Box, Typography } from "@mui/material"
import styles from "./contactsGroup.module.css"

export const ContactsGroup = () => {
  const contacts = useContacts()

  return (
    <>
      <Box
        className={styles.contactsGroupContainer}
        sx={{
          padding: { sm: "27.5vh 0 !important", xs: "12.5vh 0 !important" },
        }}
      >
        <Typography className={styles.contactsGroupTitle} variant="h4">
          Контактная информация
        </Typography>
        <Box
          className={styles.contactsContainer}
          sx={{
            flexDirection: { sm: "row !important", xs: "column !important" },
            alignItems: { sm: "stretch !important", xs: "center !important" },
          }}
        >
          {contacts.map((contact, id) => (
            <ContactCard contact={contact} key={id} />
          ))}
        </Box>
      </Box>
    </>
  )
}
