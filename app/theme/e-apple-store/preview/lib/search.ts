import {Filter} from './filter'
import {products} from './products'

export default function Search(searchTxt: string, filter: Filter) {
  let searchResults

  if (serachTxt) {
    searchResults = products.filter(product => (product.title.includes(searchTxt) && product.variants.includes(searchTxt)))
    return searchResults
  }

  return products
}