import {
  Box,
  Paper,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material"
import styles from "./contactsForm.module.css"

export const ContactsForm = () => {
  return (
    <>
      <Box>
        <Paper className={styles.contactsFormContainer} elevation={24}>
          <Typography className={styles.contactsFormTitle} variant="h4">
            Свяжитесь с нами и получите расчет вашего заказа
          </Typography>
          <FormGroup className={styles.contactsForm}>
            <TextField required label="ФИО" variant="outlined" />
            <TextField required label="Эл. почта" variant="outlined" />
            <TextField required label="Телефон" variant="outlined" />
            <TextField required label="Детали заказа" variant="outlined" />
            <Button className={styles.formSubmitBtn} variant="contained">
              Отправить
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </>
  )
}
