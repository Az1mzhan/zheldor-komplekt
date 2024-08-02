import type { FC } from "react"
import type { ProductObject } from "../../types/ProductObject"
import { useState } from "react"
import { GoodsList } from "../goods-list/GoodsList"
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import styles from "./productCard.module.css"

interface Props {
  product: ProductObject
}

export const ProductCard: FC<Props> = ({ product }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleNestedList = () => {
    setOpen(!open)
  }

  return (
    <>
      <Card
        className={styles.productCard}
        onClick={handleNestedList}
        sx={{ alignSelf: open ? "stretch" : "flex-start" }}
      >
        <CardActionArea>
          <CardMedia
            className={styles.cardMedia}
            component="img"
            image={product.img}
            alt={product.title}
          />
          <CardContent className={styles.cardContent}>
            <div className={styles.cardList}>
              <p className={styles.productTitle}>{product.title}</p>
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>
            <Collapse in={open}>
              <GoodsList goodsNamings={product.goodsNamings} />
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
