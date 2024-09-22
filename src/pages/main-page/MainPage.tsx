import { Catalogue } from "../../components/catalogue/Catalogue"
import { Contacts } from "../../components/contacts/Contacts"
import { ContactsForm } from "../../components/contacts-form/ContactsForm"
import type { FC } from "react"
import { defaultDocuments } from "../../types/defaultDocuments"
import styles from "./mainPage.module.css"

const MainPage: FC = () => {
  return (
    <>
      <Catalogue />
      <div className="section">
        <h2 className="sectionTitle">Сертификация</h2>
        <div className={styles.documentsContainer}>
          {defaultDocuments.map((doc, id) => (
            <img
              key={id}
              src={doc}
              alt={doc.match(/assets\/(.*)\.webp/)[1]}
              width="20%"
              height="20%"
            />
          ))}
        </div>
      </div>
      <Contacts />
      <ContactsForm />
    </>
  )
}

export default MainPage
