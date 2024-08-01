import { Product } from "../../types/Product"
import { selectGoodsNamings } from "./selectGoodsNamings"

export const selectProductParams = (product: Product) => {
  return {
    url: `/${Object.keys(Product)[Object.values(Product).indexOf(product)].toLowerCase()}`,
    img: `/assets/${Object.keys(Product)[Object.values(Product).indexOf(product)].toLowerCase()}.png`,
    goodsNamings: selectGoodsNamings(product),
  }
}
