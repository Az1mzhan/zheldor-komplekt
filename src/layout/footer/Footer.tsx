import type { FC } from "react"
import styles from "./footer.module.css"

export const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contentContainer}>
          <p className={styles.companyTitle}>
            © ООО "Желдоркомплект", {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}
