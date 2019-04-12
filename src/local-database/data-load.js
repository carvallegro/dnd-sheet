import _ from 'lodash'
import indexedItems from '@enums/indexedItems'
import storage from './storage'

const loadSrdData = () => Promise.all(_.map(indexedItems, loadFromServer))

const loadFromServer = indexedItem => fetch(
  `${process.env.PUBLIC_URL}/data/${indexedItem}.json`
)
  .then(response => response.json())
  .then(result => storage.setItem(indexedItem, result))
  .catch(err => console.error(err)) // TODO better error management

export default loadSrdData
