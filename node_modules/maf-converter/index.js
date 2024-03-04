const Converter = {
    convertLength: (unitFrom, unitTo, value) => {
        const units = {
            meter: 1,
            centimeter: 100,
            millimeter: 1000,
            kilometer: 0.001,
            inch: 39.3701,
            foot: 3.28084,
            yard: 1.09361,
            mile: 0.000621371
        };

        if (!units[unitFrom] || !units[unitTo]) {
            throw new Error('Invalid units');
        }

        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            throw new Error('Invalid value');
        }

        const convertedValue = (numericValue * units[unitFrom]) / units[unitTo];
        return convertedValue.toFixed(2);
    }
};

module.exports = Converter;
