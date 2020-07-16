// Reverse
let input = "Input Kata!"; //Input ur words
let result = ''
let reverse = ''
let length = input.length
let i = 0;
while (i < length) {
    result += input.charAt(i)
    i++;
}
while (i >= 0) {
    reverse += input.charAt(i)
    i--;
}
console.log(reverse)

// terlalu banyak variable menurutku, bisa di jadiin 1 baris fungsi
// jadi disini ada parameter words, habis itu di split jadi array, habis itu array itu ada iterator reverse jadi manfaatin fungsi itu
// terus pake fungsi join untuk rubah array jadi pemisah sesuai yang ditentukan
const reverse = words => words.split('').reverse().join('');

console.log(reverse("semua kata-kata"));