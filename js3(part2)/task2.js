function firstNonRepeatingCharacter(str) {
    const charMap = {};
    for (const char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    for (const char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }
    return null;
}

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function uniqueCharacters(str) {
    return [...new Set(str)].join('');
}

console.log(firstNonRepeatingCharacter('фывфавыапрс')); // 'п'
console.log(generateRandomString(5)); // '2fvg6'
console.log(uniqueCharacters('позволяеткопироватьтекстиз')); // 'позвляеткираьс'
