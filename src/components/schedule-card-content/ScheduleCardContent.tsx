import type { FC } from "react"
import { Box, Typography } from "@mui/material"
import styles from "./scheduleCardContent.module.css"

export const ScheduleCardContent: FC = () => {
  return (
    <>
      <Box>
        <Box className={styles.infoLine}>
          <Typography>Пн - Пт:</Typography>
          <Typography>09:00 - 18:00</Typography>
        </Box>
        <Box className={styles.infoLine}>
          <Typography>Сб - Вс:</Typography>
          <Typography>Выходной</Typography>
        </Box>
      </Box>
    </>
  )
}
