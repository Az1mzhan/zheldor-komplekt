import { Box, Paper, Typography } from "@mui/material"
import NearMeIcon from "@mui/icons-material/NearMe"
import PhoneIcon from "@mui/icons-material/Phone"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import styles from "./contacts.module.css"

export const Contacts = () => {
  return (
    <>
      <Box className={styles.contactsField}>
        <Paper className={styles.contactsContainer} elevation={24}>
          <Typography className={styles.contactsContainerTitle} variant="h4">
            Наши контакты
          </Typography>
          <Box className={styles.contactsList}>
            <Box>
              <NearMeIcon />
              <Box>
                <Typography className={styles.contactsTitle}>
                  Адрес офиса
                </Typography>
                <Typography>
                  630054, Россия, Новосибирская область, 3-й пер. Крашенникова
                  3/1, офис 004
                </Typography>
              </Box>
            </Box>
            <Box>
              <PhoneIcon />
              <Box>
                <Typography className={styles.contactsTitle}>
                  Телефоны
                </Typography>
                <Typography>+7-913-912-90-56</Typography>
              </Box>
            </Box>
            <Box>
              <AlternateEmailIcon />
              <Box>
                <Typography className={styles.contactsTitle}>
                  Эл. почта
                </Typography>
                <Typography>2149056@bk.ru</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}
