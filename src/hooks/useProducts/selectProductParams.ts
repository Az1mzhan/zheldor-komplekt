import { Product } from "../../types/Product"
import { selectGoodsNamings } from "./selectGoodsNamings"
import plates from "../../../assets/plates.png"
import railway_covers from "../../../assets/railway_covers.png"
import railway_rails from "../../../assets/railway_rails.png"
import switches from "../../../assets/switches.png"
import tram_covers from "../../../assets/tram_covers.png"

const selectIcon = (product: Product) => {
  switch (product) {
    case Product.PLATES:
      return plates
    case Product.RAILWAY_COVERS:
      return railway_covers
    case Product.RAILWAY_RAILS:
      return railway_rails
    case Product.SWITCHES:
      return switches
    case Product.TRAM_COVERS:
      return tram_covers
  }
}

export const selectProductParams = (product: Product) => {
  return {
    url: `/${Object.keys(Product)[Object.values(Product).indexOf(product)].toLowerCase()}`,
    img: selectIcon(product),
    goodsNamings: selectGoodsNamings(product),
  }
}
