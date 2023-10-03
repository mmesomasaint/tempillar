import {Filter} from './filter'
import {products} from './products'

export default function Search(searchTxt: string, filter: Filter) {
  const searchResults = products.filter(product => (product.title.includes(searchTxt) && product.variants.includes(searchTxt)))

  return searchResults
}