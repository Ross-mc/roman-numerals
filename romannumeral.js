const romanHash = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
};

const romanToInt = str => {
    if (str.length === 0 || typeof str !== 'string') return 'Not a Roman Numeral';

    const arr = str.split("");

    const arrOfValues = [];
    
    for (let i = 0; i< arr.length; i++){
        let character = arr[i];
        if (romanHash[character] === undefined) {
            return 'Not a Roman Numeral';
        } else {
            arrOfValues.push(romanHash[character]);
        }
    }

    const int = arrOfValues.reduce(
        (acc, value, index, arrOfValues) => 
            arrOfValues[index+1] <= value || index === arrOfValues.length-1
                ? acc + value
                : acc - value
        , 0
    );

    return int
    
}

module.exports = romanToInt