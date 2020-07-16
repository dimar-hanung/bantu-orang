// Recursive
// let input = "8"; //Input your number!
// if (isNaN(input) === true) {
//   alert("input harus angka");
// }
// let i = parseInt(input);
// let result = "";
// while (i > 0) {
//   result += i + " ";
//   i--;
// }
// console.log(result)

// itu percuma sebenernya ada if disitu
// soalnya kode yang dibawahnya tetep jalan walaupun if false
// cara efisien

function rekrusif(n){
  let result = "";
  while(n>0){
    // algoritma juga harus diperhatiin, coba aja n-- pindah atas result , pasti hasilnya beda
    result += n + " ";
    n--;
  }
  console.log(result);


}

rekrusif(8);