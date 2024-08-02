import type { FC } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./errorPage.module.css"

const ErrorPage: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }, [])

  return (
    <>
      <div className={styles.errorPage}>
        <h1 className="sectionTitle">
          Извините, но страница находится в разработке. Сейчас мы вас
          перенаправим на главную страницу
        </h1>
      </div>
    </>
  )
}

export default ErrorPage
