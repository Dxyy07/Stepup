// cara membuat variabel
var a = "a";
let b = "b";
const c = "c"

// variabel bisa menampung tipe data string, integer, boolean, array, object

let nama = "Dxy"; // String
let umur = 22; // number
let apakahBenar = true; //Boolean
let uang = 5000.5 //number namun ada koma

//Opertor aritmatika
let angka1 = 10;
let angka2 = 20;

console.log(angka1+angka2);
console.log(angka1-angka2);
console.log(angka1/angka2);
console.log(angka1*angka2);
console.log(angka1%angka2);


//blajar mengisi variabel

let penampungHasiloperatorAritmatika = angka1 + angka2;
console.log(penampungHasiloperatorAritmatika);
penampungHasiloperatorAritmatika = angka1 - angka2;
console.log(penampungHasiloperatorAritmatika);
penampungHasiloperatorAritmatika = angka1 * angka2;
console.log(penampungHasiloperatorAritmatika);
penampungHasiloperatorAritmatika = angka1 / angka2;
console.log(penampungHasiloperatorAritmatika);

//string juga bisa ditambahkan namun string tidak dapat dikurangkan menggunakan operator aritmatika
let firstnam = 'agus';
let lastname = 'setiawan';

let fullname = firstnam +' '+ lastname;
console.log (fullname);
console.log (firstnam + ' '+ lastname);   
console.log (firstnam - lastname) //nan

//alur pembacaan code dari kiri ke kanan dan atas ke bawah

//contoh

let number = 20;
console.log (number + 10);// 30
number = 10;
console.log (number + 10 )// 20
number = false ;
console.log (number + 10)// 10 ini karena false bernilai 0 dan true bernilai 1
number = true;
console.log(number + 10); // 11 karena nilai dari true = 1

//membaca error
//error gabole takut justru harus bersyukur karena kesalahan diketahui

const hewan = 'jerapah';
console.log(hewan);
// hewan = "buaya" ;
// console.log (hewan)

//tipsnya adaalah selalu telitit an kalau ada error dibaca aja, 
// belajar ngoding adalah kebiasaan karena belajar ngoding itu adalah habbit

