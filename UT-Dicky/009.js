const cities = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];
let hasil = cities.filter(function(city, index) {
return cities.indexOf(city) == index;
});
console.log(hasil)

// filter ya , sip , aku baru tau

// ini cara ku

const checkDuplicate = arr =>{
    console.log([ ...new Set(arr) ])
}
checkDuplicate(cities)