import type { FC } from "react"
import type { Good } from "../../types/ProductObject"
import styles from "./goodsList.module.css"

interface Props {
  goods: Good[]
}

export const GoodsList: FC<Props> = ({ goods }: Props) => {
  return (
    <>
      {goods && (
        <ul className={styles.goodsList}>
          {goods.map((good, id) => (
            <li className={styles.listItem} key={id}>
              <p>{good.naming}</p>
              <p>
                <b>Нормативный документ: </b>
                {good.certificate}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
