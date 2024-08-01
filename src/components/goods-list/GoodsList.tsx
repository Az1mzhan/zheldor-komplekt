import type { FC } from "react"
import { List, ListItem, ListItemText } from "@mui/material"
import styles from "./goodsList.module.css"

interface Props {
  goodsNamings: string[]
}

export const GoodsList: FC<Props> = ({ goodsNamings }: Props) => {
  return (
    <>
      {goodsNamings && (
        <List>
          {goodsNamings.map((goodNaming, id) => (
            <ListItem className={styles.listItem} key={id}>
              <ListItemText primary={goodNaming} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}
