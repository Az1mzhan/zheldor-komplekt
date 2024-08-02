import type { FC } from "react"
import { useProducts } from "../../hooks/useProducts/useProducts"
import { ProductCard } from "../product-card/ProductCard"
import styles from "./catalogue.module.css"

export const Catalogue: FC = () => {
  const products = useProducts()

  return (
    <>
      <div className={styles.catalogue}>
        <h1 className={styles.catalogueTitle}>Каталог продукции</h1>
        <div className={styles.productsContainer}>
          {products?.map((product, id) => (
            <ProductCard product={product} key={id} />
          ))}
        </div>
      </div>
    </>
  )
}
