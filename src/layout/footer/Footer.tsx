import type { FC } from "react"
import { Box, Paper, Typography } from "@mui/material"
import styles from "./footer.module.css"

export const Footer: FC = () => {
  return (
    <>
      <Paper className={styles.footer}>
        <Typography className={styles.companyTitle} variant="subtitle1">
          © ООО "Желдоркомплект"
        </Typography>
      </Paper>
    </>
  )
}
