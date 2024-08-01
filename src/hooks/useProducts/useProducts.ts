import { useState, useEffect } from "react"
import { selectProductParams } from "./selectProductParams"
import type { ProductObject } from "../../types/ProductObject"
import { Product } from "../../types/Product"

export const useProducts = () => {
  const [productTitles, setProductTitles] = useState<Product[]>(
    Object.values(Product),
  )
  const [products, setProducts] = useState<ProductObject[]>([])

  useEffect(() => {
    productTitles.forEach(productTitle => {
      setProducts(products => [
        ...products,
        {
          title: productTitle,
          ...selectProductParams(productTitle),
        },
      ])
    })
  }, [])

  return products
}
