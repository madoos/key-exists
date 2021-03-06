'use strict'

const type = require('madoos-type')

module.exports = function keyExists (obj, path) {
  checkExceptions(obj, path)
  const keys = path.replace(/\[(\w+)]/g, '.$1').split('.').filter(Boolean)
  return keys.every(propInObject(obj))
}

function propInObject (currentObj) {
  return function (key, i, keys) {
    const nextKey = keys[i + 1]
    const child = currentObj[key]
    if (isIndexable(child) || !nextKey && keyInObj(currentObj, key)) {
      currentObj = child
      return true
    }
    return false
  }
}

function isIndexable (val) {
  return type.isObject(val) || type.isArray(val)
}

function checkExceptions (obj, path) {
  if (!type.isString(path)) throw new Error('The object key must be a string!')
  if (!isIndexable(obj)) throw new Error('The first parameter should to be an Object or Array!')
}

function keyInObj (obj, key) {
  return key in obj
}
