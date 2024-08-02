import { Typography } from "@mui/material"
import NearMeIcon from "@mui/icons-material/NearMe"
import PhoneIcon from "@mui/icons-material/Phone"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import styles from "./contacts.module.css"

export const Contacts = () => {
  return (
    <>
      <div className={styles.contactsField}>
        <div className={styles.contactsContainer}>
          <h2 className={styles.contactsContainerTitle}>Наши контакты</h2>
          <div className={styles.contactsList}>
            <div>
              <NearMeIcon />
              <div>
                <h3 className={styles.contactsTitle}>Адрес офиса</h3>
                <Typography>
                  630054, Россия, Новосибирская область, 3-й пер. Крашенникова
                  3/1, офис 004
                </Typography>
              </div>
            </div>
            <div>
              <PhoneIcon />
              <div>
                <h3 className={styles.contactsTitle}>Телефоны</h3>
                <Typography>+7-913-912-90-56</Typography>
              </div>
            </div>
            <div>
              <AlternateEmailIcon />
              <div>
                <h3 className={styles.contactsTitle}>Эл. почта</h3>
                <Typography>2149056@bk.ru</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
