function temperatureConverter(temperature, unit) {
    if(unit === 'Fahrenheit' || unit === 'fahrenheit'){
        const convertedTemp = (temperature - 32) * 5/9;
        const result = `${temperature} degrees ${unit} is ${convertedTemp} degrees Celcius.`;
        return result;
    }

    if(unit === 'Celcius' || unit === 'celcius'){
        const convertedTemp = (temperature * 9/5) + 32;
        const result = `${temperature} degrees ${unit} is ${convertedTemp} degrees Fahrenheit.`;
        return result;
    }

    return 'Invalid value. Enter either Fahrenheit or Celcius.'
}

console.log(temperatureConverter(32, 'Celcius'))
console.log(temperatureConverter(72, 'Fahrenheit'))
console.log(temperatureConverter(72, 'Fahrenhit'))
