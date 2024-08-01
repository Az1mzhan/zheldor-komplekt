import { ContactsGroup } from "../../components/contacts-group/ContactsGroup"
import { Outlet } from "react-router-dom"

const ContactsPage = () => {
  return (
    <>
      <ContactsGroup />
      <Outlet />
    </>
  )
}

export default ContactsPage
