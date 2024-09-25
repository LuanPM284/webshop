// a function to generate a random number
function generateRandomNumber() {
    // we remove the decimal with Math.floor, and we will get numvers from 1 to 100.
    // since random gives us a range from 0 to 1
    return Math.floor(Math.random() * 100) + 1;
}
function celciusToF(celcius) {
    return (celcius * 9) / 32
}

// module.exports = generateRandomNumber

module.exports = {
    generateRandomNumber,
    celciusToF,
}