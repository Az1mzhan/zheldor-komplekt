import { useEffect, useState } from "react"
import { selectContactIcon } from "./selectContactIcon"
import { Contact } from "../../types/Contact"
import type { ContactObject } from "../../types/ContactObject"
import { selectContactElement } from "./selectContactElement"

export const useContacts = () => {
  const [contactTitles, setContactTitles] = useState<Contact[]>(
    Object.values(Contact),
  )
  const [contacts, setContacts] = useState<ContactObject[]>([])

  useEffect(() => {
    contactTitles.forEach(contactTitle => {
      setContacts(contacts => [
        ...contacts,
        {
          title: contactTitle,
          icon: selectContactIcon(contactTitle),
          content: selectContactElement(contactTitle),
        },
      ])
    })
  }, [])

  return contacts
}
