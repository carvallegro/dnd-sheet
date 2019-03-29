import _ from 'lodash'
import storage from './storage'

import indexedItems from '../enums/indexedItems'

export const checkMissingItems = async () => {
  const keysInStore = await storage.keys()
  return _.difference(Object.values(indexedItems), keysInStore)
}

export const getStoredData = async () => {
  const result = []
  await Promise.all(_.map(indexedItems, async itemKey => {
    const item = await storage.getItem(itemKey)
    result.push(item)
  }))

  return result
}
