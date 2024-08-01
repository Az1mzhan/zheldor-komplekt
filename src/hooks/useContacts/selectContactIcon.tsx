import { Contact } from "../../types/Contact"
import NearMeIcon from "@mui/icons-material/NearMe"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

export const selectContactIcon = (contact: Contact) => {
  switch (contact) {
    case Contact.ADDRESS:
      return <NearMeIcon />
    case Contact.EMAIL:
      return <AlternateEmailIcon />
    case Contact.PHONES:
      return <LocalPhoneIcon />
    case Contact.SCHEDULE:
      return <CalendarMonthIcon />
  }
}
