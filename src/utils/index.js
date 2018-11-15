import products from '../data/products';
import _ from 'lodash';

/*
 * Function to filter all the products of a level
 */
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

/*
 * Function to get the breadcrumb regarding and sublevel selected
 */
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

/*
 * Function to filter products regarding filters selected
 */
export function filterProducts (productsToFilter, filters) {
  return _.filter(productsToFilter, (product) => {
    let found = false
    for (let i=0; i<filters.length; i++) {
      let filter = filters[i]

      switch (filter.key) {
        case 'available':
          found = product[filter.key] === filter.value
          break;
        case 'quantity':
          found = product[filter.key] <= filter.value
          break;
        case 'price':
          found = product.priceNumber >= filter.value.min && product.priceNumber <= filter.value.max
          break;
        default:
          found = false
          break;
      }

      if (!found) {
        break
      }
    }

    //console.log(found)

    return found
  })
}

/*
 * Function to sort products regarding an attribute and a mode (asc, desc)
 */
export function sortProducts (productsToSort, key, mode = 'asc') {
  return _.orderBy(productsToSort, key, mode)
}

/*
 * Function to update the filters regarding new values
 */
export function updateFilters (filters, {key, value}) {
  let newFilters = filters.slice()

  let index = _.findIndex(filters, (f) => {
    return f.key === key
  })

  if (index === -1) {
    newFilters.push({key, value})
  } else {
    if (key === 'available' && value === '') {
      newFilters.splice(index, 1)
    } else {
      newFilters[index].value = value 
    }
  }

  return newFilters
}

/*
 * Function to get a valid range for quantity regarding the products quantities
 */
export function getQuantityRange () {
  const productsSorted = sortProducts(products, 'quantity')

  return {
    min: productsSorted[0].quantity,
    max: productsSorted[productsSorted.length - 1].quantity
  }
}

/*
 * Function to get a valid range for prices regarding products prices
 */
export function getpriceRange () {
  const productsNormalized = products.map((p) => {
    return {
      ...p,
      priceNumber: parseFloat(p.price.replace(/,/g, "").replace(/\$/g, ""))
    }
  })

  const productsSorted = sortProducts(productsNormalized, 'priceNumber')

  return {
    min: productsSorted[0].priceNumber,
    max: productsSorted[productsSorted.length - 1].priceNumber
  }
}

/*
 * Function to search products regarding query
 */
export function searchProductsInSublevelByQuery (query, sublevel) {
  const regex = new RegExp(query, 'i')

  let productsInSublevel = []
  searchProductsBySublevel(sublevel, productsInSublevel)

  return _.filter(productsInSublevel, (product) => {
    return regex.test(product.name)
  })
}

/*
 * Function to update the cart in localStorage
 */
export function updateCartInLocalStorage (products) {
  localStorage.setItem('cart', JSON.stringify(products))
}

/*
 * Function to get the cart data from localStorage
 */
export function getCartFromLocalStorage () {
  if (!localStorage.getItem('cart')) {
    return []
  }

  try {
    return JSON.parse(localStorage.getItem('cart')).products || []
  } catch (err) {
    return []
  }
}