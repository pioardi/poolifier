/**
 * Contains utility functions
 * @author Alessandro Pio Ardizio
 * @since 0.0.1
 */

const uuid = require('uuid/v4')
/**
 * Return an id to be associated to a node.
 */
module.exports.generateID = () => {
  return uuid()
}

module.exports.randomWorker = (collection) => {
  const keys = Array.from(collection.keys())
  return keys[Math.floor(Math.random() * keys.length)]
}