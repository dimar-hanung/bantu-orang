// leapYear
// let firstYear = 2003; //Input your number
// let secondYear = 2004; //Input your number
// let checkKabisat = (year) => {
//     if ((year % 100 != 0 || year % 400 == 0) && (year % 4 == 0)){
//         console.log(year = "Kabisat!");
//     } else {
//         console.log(year = "Bukan Kabisat!");
//     }        
// }

// checkKabisat(firstYear)
// checkKabisat(secondYear)


// Sebener nya yang dimaksud di sini selisih dari tahun nya itu mana aja yang tahun kabisat
// ini solved ku


const leapYear = (year1,year2) =>{
    while(year1 <= year2){
       let isLeap = new Date(year1, 1, 29).getDate() === 29;
       if(isLeap == true) console.log(`${year1} adalah tahun kabisat`);
           else console.log(`${year1} adalah bukan tahun kabisat`);
       
       year1++  ;

   }


}

leapYear(1600,2020);