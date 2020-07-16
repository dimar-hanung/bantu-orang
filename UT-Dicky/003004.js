//const notYet = null;


// ini hasil buatan ku
// no 3
const buatAngka = jumlah =>{

    let output = [];
    for(let i = 0; i < jumlah ; i++) output.push(Math.floor(Math.random()*100 + 1));

    return output;

}

const deretAngka = buatAngka(100);
console.log("Variable Deret Angka Berisi: ")
console.log(deretAngka);


console.log("\nHasil Max, Min, Avarage berturut-turut");
const max = arr => Math.max( ...arr );
const min = arr => Math.min( ...arr );
const average = (array) => array.reduce((a, b) => a + b) / array.length;



console.log(max(deretAngka));
console.log(min(deretAngka));
console.log(average(deretAngka));


// no 4

const palindrome = words =>{
    words = words.split(' ').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").toLowerCase();
    const ori = JSON.stringify(words.split(''))
    const rev = JSON.stringify(words.split('').reverse())
    
    return ori === rev ? true : false;

}


console.log(palindrome("Cigar? Toss it in a can. It is so tragic"))// output true
console.log(palindrome("I did, did I?"))// output true
console.log(palindrome("Red rum, sir, is murder"))// output true
console.log(palindrome("Eva, can I see bees in a cave?"))// output true
console.log(palindrome("Hello World"))// output false