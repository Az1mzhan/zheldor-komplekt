import type { FC } from "react"
import { useContacts } from "../../hooks/useContacts/useContacts"
import { ContactCard } from "../contact-card/ContactCard"
import { Box } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import styles from "./contactsGroup.module.css"

export const ContactsGroup: FC = () => {
  const contacts = useContacts()

  return (
    <>
      <div className={styles.contactsGroupContainer}>
        <h1 className="sectionTitle">Контактная информация</h1>
        <Carousel
          className={styles.contactsCarousel}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              color: "white",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "rgba(255,255,255,0.5)",
            },
          }}
        >
          {contacts.map((contact, id) => (
            <ContactCard contact={contact} key={id} />
          ))}
        </Carousel>
      </div>
    </>
  )
}
