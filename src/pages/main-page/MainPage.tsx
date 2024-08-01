import { Catalogue } from "../../components/catalogue/Catalogue"
import { Contacts } from "../../components/contacts/Contacts"
import { ContactsForm } from "../../components/contacts-form/ContactsForm"
import type { FC } from "react"
import { Outlet } from "react-router-dom"

const MainPage: FC = () => {
  return (
    <>
      <Catalogue />
      <Contacts />
      <ContactsForm />
      <Outlet />
    </>
  )
}

export default MainPage
