// Grade
// let grade = 90; //Input your number!
// let result = "";

// if (grade >= 90) {
//   console.log((result = "A"));
// } else if (grade >= 80) {
//   console.log((result = "B"));
// } else if (grade >= 70) {
//   console.log((result = "C"));
// } else if (grade >= 60) {
//   console.log((result = "D"));
// } else {
//   console.log((result = "E"));
// }



// Cara lebih efisien console.log di jadikan 1 aja, 
// terus jadikan fungsi biar bisa dipanggil / digunakan berulang kali
// Grade2

function nilai(n) {
  let grade = n; //Input your number!
  let result = "";

  if (grade >= 90) {
    result = "A";
  } else if (grade >= 80) {
    result = "B";
  } else if (grade >= 70) {
    result = "C";
  } else if (grade >= 60) {
    result = "D";
  } else {
    result = "E";
  }

  console.log(result)

}

nilai(90);
nilai(70);
nilai(60);
