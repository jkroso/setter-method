
module.exports = getset

/**
 * create a chainable getter/setter method on `obj`
 *
 * @param {Object} object
 * @param {String} property
 * @param {Any} default value
 * @api public
 */

function getset(obj, prop, def){
  obj[prop] = function(value){
    if (!arguments.length) return this[prop]
    this[prop] = value
    return this
  }
  prop = '_' + prop // make prop private
  if (def !== undefined) obj[prop] = def
}