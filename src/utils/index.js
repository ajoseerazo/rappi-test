import products from '../data/products';
import _ from 'lodash';

export function searchProductsBySublevel (item, productsResult) {
  const { id } = item;

  // Search products of this level
  const productsFiltered = _.filter(products, (product) => {
    return product.sublevel_id === id;
  })

  productsFiltered.forEach(product => {
    productsResult.push({
      ...product,
      priceNumber: parseFloat(product.price.replace(/,/g, "").replace(/\$/g, ""))
    })
  })  

  // Search for products of children of this item
  if (item.sublevels) {
    item.sublevels.forEach(sublevel => {
      searchProductsBySublevel (sublevel, productsResult)
    });
  }
}

export function getBreadcrumb (items, item, path, found) {
  if (found.value) {
    return
  }
  
  for (let i=0; i<items.length; i++) {
    if (found.value) {
      return
    }

    path.push(items[i].name)
    if (items[i].id === item.id && items[i].name === item.name ) {
      found.value = true
      return
    } else {
      if (items[i].sublevels) {
        getBreadcrumb(items[i].sublevels, item, path, found)
      } else {
        path.pop()
      }
    }
  }

  if (!found.value) {
    path.pop()
  }
}

export function filterProducts (productsToFilter, key, value) {
  return _.filter(productsToFilter, (product) => {
    if (key === 'quantity' || 'available') {
      return product[key] === value
    } else {
      if (key === 'price') {
        return product.priceNumber >= value.min && product.priceNumber <= value.max
      }
    }
  })
}

export function sortProducts (productsToSort, key, mode) {
  return _.orderBy(productsToSort, key, mode)
}

export function updateFilters (filters, {key, value}) {
  let newFilters = filters.slice()

  let index = _.findIndex(filters, (f) => {
    return f.key === key
  })

  if (index === -1) {
    newFilters.push({key, value})
  } else {
    newFilters[index].value = value
  }

  return newFilters
}