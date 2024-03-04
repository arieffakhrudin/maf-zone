# Length Unit Converter
This simple npm package provides a function to convert length units.

## Installation
npm install length-unit-converter

## Usage
const Converter = require('length-unit-converter');

// Convert 2 meters to centimeters
const result = Converter.convertLength('meter', 'centimeter', 2);
console.log(result); // Output: 200

The convertLength function takes four parameters:

fromUnit: The unit to convert from (e.g., 'meter').
toUnit: The unit to convert to (e.g., 'centimeter').
value: The value to convert.
Returns: The converted value.
Supported units:

Meter (meter)
Centimeter (centimeter)
Kilometer (kilometer)
Inch (inch)
Foot (foot)
Yard (yard)
Mile (mile)

## License
This project is licensed under the MIT License - see the LICENSE file for details.