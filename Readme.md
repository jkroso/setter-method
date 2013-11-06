
# getset

  getter setter methods without the boilerplate

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

    $ packin add jkroso/getset

then in your app:

```js
var getset = require('getset')
```

## API

### getset(object, property, default)

  create a chainable getter/setter method on `obj`

```js
var object = {}

// create methods and default values
getset(object, 'width', 50)
getset(object, 'height', 100)
getset(object, 'color', 'aliceblue')

// set values
object
  .width(1200)
  .heigth(800)

// get values
object.width() // => 1200
object.color() // => 'aliceblue'
```

## Running the tests

Just run `make` and navigate your browser to the test directory.
