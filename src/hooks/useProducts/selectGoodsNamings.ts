import { Product } from "../../types/Product"

export const selectGoodsNamings = (product: Product) => {
  switch (product) {
    case Product.RAILWAY_COVERS:
      return [
        'Накладки рельсовые двухголовые 1Р65, с маркировкой "Желдоркомплект"',
        'Накладки рельсовые двухголовые 2Р65, с маркировкой "Желдоркомплект"',
        "Накладки к рельсам железнодорожного типа Р-24",
        "Накладки к рельсам железнодорожного типа Р-33",
      ]
    case Product.TRAM_COVERS:
      return ["Накладка трамвайная Т-62"]
    case Product.PLATES:
      return [
        "Подкладки раздельного крепления железнодорожного пути типа КБ-65 (отливки)",
        "Подкладки раздельного крепления железнодорожного пути типа КБ-50 (отливки)",
        "Подкладки раздельного крепления железнодорожного пути типа КД-65 (отливки)",
        "Подкладки раздельного крепления железнодорожного пути типа КД-50 (отливки)",
        "Подкладки раздельного крепления железнодорожного пути типа СК-65 (отливки)",
        "Подкладки раздельного крепления железнодорожного пути типа СК-65 (отливки)",
      ]
  }
}