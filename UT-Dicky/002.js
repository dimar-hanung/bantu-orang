// oddEven
// let number = 5; //Input your number!
// result = number % 2
// if (result == 0) {
//     console.log(result = "Genap!")
// } else {
//     console.log(result = "Ganjil!")
// }



// cara 2
// Bisa dijadikan 1 baris fungsi menggunakan arrow function + tenary Operator
// disitu tenary operator akan return string, emang dari sana nya wkwk
let oddEven = number => number%2==0?"genap":"ganjil"
console.log(oddEven(2));



// cara 3
// atau kalau mau readable
// bedanya sama cara satu, disini gaperlu buat variable result biar lebih hemat
let oddEven2 = number => {

    if(number%2==0){
        console.log("Genap");
    }else{
        console.log("Ganjil");
    }

}

oddEven2(3);
