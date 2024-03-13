function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function removeDuplicates(num) {
    return parseInt([...new Set(num.toString())].join(''));
}

function countOccurrences(num, digit) {
    return num.toString().split('').filter(d => d === digit.toString()).length;
}


function longestSequenceOfZeroesOrOnes(num) {
    const binary = num.toString(2);
    const sequences = binary.match(/0+|1+/g);
    if (!sequences) return 0;
    return Math.max(...sequences.map(seq => seq.length));
}

console.log(reverseNumber(123)); // 321
console.log(removeDuplicates(111333456)); // 13456
console.log(countOccurrences(1355567, 5)); // 3
console.log(longestSequenceOfZeroesOrOnes(1001110011011)); // 3
