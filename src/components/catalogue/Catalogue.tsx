import { useProducts } from "../../hooks/useProducts/useProducts"
import { ProductCard } from "../product-card/ProductCard"
import type { FC } from "react"
import { Box, Typography } from "@mui/material"
import styles from "./catalogue.module.css"

export const Catalogue: FC = () => {
  const products = useProducts()

  return (
    <>
      <Box className={styles.catalogue}>
        <Typography className={styles.catalogueTitle} variant="h4">
          Каталог продукции
        </Typography>
        <Box className={styles.productsContainer} sx={{}}>
          {products?.map((product, id) => (
            <ProductCard product={product} key={id} />
          ))}
        </Box>
      </Box>
    </>
  )
}
