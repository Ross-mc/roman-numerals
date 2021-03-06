const romanHash = {
    'M': {
        value: 1000,
        max: 4
    },
    'D': {
        value: 500,
        max: 1
    },
    'C': {
        value: 100,
        max: 4
    },
    'L': {
        value: 50,
        max: 1
    },
    'X': {
        value: 10,
        max: 4
    },
    'V': {
        value: 5,
        max: 1
    },
    'I': {
        value: 1,
        max: 3
    }
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
            arrOfValues.push(romanHash[character].value);
        }
    };

    //validation for more characters than allowed

    for (const [character, value] of Object.entries(romanHash)) {
        const regex = new RegExp(character, "g");
        const occurences = str.match(regex);

        if (occurences !== null && occurences.length > value.max){
            return 'Not a Valid Roman Numeral'
        }
    };

    // Validation for disordered numerals, eg IMC

    for (let i = 0; i<arrOfValues.length-1; i++){
        let currentElem = arrOfValues[i];
        let nextElem = arrOfValues[i+1];
        //a character can only be smaller than the next character if it represents the 4 digit or the 9 digit and must be 1/5 or 1/10 of the next character
        if (currentElem < nextElem && (currentElem * 10 !== nextElem && currentElem * 5 !== nextElem)){
            return 'Not a Valid Roman Numeral'
        };
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