import type { Product } from "./Product"

export type Good = {
  naming: string
  certificate: string
}

export type ProductObject = {
  title: Product
  img: string
  url: string
  goods: Good[]
}
