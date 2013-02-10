
# dot-util

  Convenient property accessors.

## Installation

    $ npm install dot-util

    $ component install nathan7/dot-util

## Example

    ['the', 'quick', 'brown', 'fox'].map(dot('length')) ~= [3, 5, 5, 3]

    [['the', 'quick'], ['brown', 'fox']].map(dot(0).dot('length')) ~= [3, 5]

## API

### dot(key)

    dot('x') ~= function(obj) { return obj.x }
    dot(key)(obj) === obj[key]

  returns an accessor for key

### accessor.dot(key)

    dot('x').dot('y') ~= function(obj) { return obj.x.y }``
    dot(keyOne).dot(keyTwo)(obj) === obj[keyOne][keyTwo]

  returns a composed accessor for key

## License

  MIT
