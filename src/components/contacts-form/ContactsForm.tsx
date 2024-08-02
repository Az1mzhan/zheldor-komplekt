import { FormGroup, TextField } from "@mui/material"
import styles from "./contactsForm.module.css"

export const ContactsForm = () => {
  return (
    <>
      <div className={styles.contactsFormContainer}>
        <h1 className="sectionTitle">
          Свяжитесь с нами и получите расчет вашего заказа
        </h1>
        <FormGroup className={styles.contactsForm}>
          <TextField required label="ФИО" variant="outlined" />
          <TextField required label="Эл. почта" variant="outlined" />
          <TextField required label="Телефон" variant="outlined" />
          <TextField required label="Детали заказа" variant="outlined" />
          <button className={styles.formSubmitBtn}>Отправить</button>
        </FormGroup>
      </div>
    </>
  )
}
