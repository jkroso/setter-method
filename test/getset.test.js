
var assert = require('assert')
var getset = require('..')

describe('getset', function(){
	var obj = {}
	getset(obj, 'width', 50)

	it('get', function(){
		assert(obj.width() == 50)
	})

	it('set', function(){
		assert(obj.width(100) == obj)
		assert(obj.width() == 100)
	})

	it('default value should be optional', function(){
		var obj = {}
		getset(obj, 'height')
		assert(obj.height() === undefined)
		assert('_height' in obj === false)
	})
})
