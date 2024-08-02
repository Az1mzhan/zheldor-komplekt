import type { FC } from "react"
import { Box, Typography } from "@mui/material"
import styles from "./scheduleCardContent.module.css"

export const ScheduleCardContent: FC = () => {
  return (
    <>
      <div className={styles.scheduleCardContent}>
        <div className={styles.infoLines}>
          <div className={styles.infoLine}>
            <p className="infoLineContent">Пн - Пт:</p>
            <p className="infoLineContent">09:00 - 18:00</p>
          </div>
          <div className={styles.infoLine}>
            <p className="infoLineContent">Сб - Вс:</p>
            <p className="infoLineContent">Выходной</p>
          </div>
        </div>
      </div>
    </>
  )
}
