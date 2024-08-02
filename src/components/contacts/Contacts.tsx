import { Paper, Typography } from "@mui/material"
import NearMeIcon from "@mui/icons-material/NearMe"
import PhoneIcon from "@mui/icons-material/Phone"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import styles from "./contacts.module.css"

export const Contacts = () => {
  return (
    <>
      <div className={styles.contactsField}>
        <Paper className={styles.contactsContainer} elevation={24}>
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
                <Typography className={styles.contactsTitle}>
                  Телефоны
                </Typography>
                <Typography>+7-913-912-90-56</Typography>
              </div>
            </div>
            <div>
              <AlternateEmailIcon />
              <div>
                <Typography className={styles.contactsTitle}>
                  Эл. почта
                </Typography>
                <Typography>2149056@bk.ru</Typography>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </>
  )
}
