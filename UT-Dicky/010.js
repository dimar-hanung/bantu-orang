const people = [
    { "id": 1, "name": "Udin", "age": 12 },
    { "id": 2, "name": "Reane", "age": 51 },
    { "id": 3, "name": "Budi", "age": 34 },
    { "id": 4, "name": "Agus", "age": 16 },
    { "id": 5, "name": "Sari", "age": 19 },
    { "id": 6, "name": "Ririn", "age": 20 },
    { "id": 7, "name": "Dessy", "age": 23 }
]




// untuk ini kode mas nya jauh lebih efisien dibanding punya saya wkwk, saya modif dikit biar jadi fungsi

const cekUmur = (bio, umur) => {
  
    let dewasa = people.filter(function(person) {
        return person.age > umur
    });
    let muda = people.filter(function(person) {
        return person.age < umur
    });
  
    console.log(`Data Orang yang berumur dibawah ${umur}`);
    console.log(muda);
    console.log("==================== **** ===================");
    console.log(`Data Orang yang berumur diatas ${umur}`);
    console.log(dewasa);
  };
  
  cekUmur(people, 21);
  