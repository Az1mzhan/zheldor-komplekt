import { Contact } from "../../types/Contact"
import { AddressCardContent } from "../../components/address-card-content/AddressCardContent"
import { EmailCardContent } from "../../components/email-card-content/EmailCardContent"
import { PhoneCardContent } from "../../components/phone-card-content/PhoneCardContent"
import { ScheduleCardContent } from "../../components/schedule-card-content/ScheduleCardContent"

export const selectContactElement = (contact: Contact) => {
  switch (contact) {
    case Contact.ADDRESS:
      return <AddressCardContent />
    case Contact.EMAIL:
      return <EmailCardContent />
    case Contact.PHONES:
      return <PhoneCardContent />
    case Contact.SCHEDULE:
      return <ScheduleCardContent />
  }
}
