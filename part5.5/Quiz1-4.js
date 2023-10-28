/*
1. Let's Form a Sentence

Problem
Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
*/

//code here
// Code untuk menambahkan kata satu persatu 
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';
console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);
// ---------------------------------------
// code menambahkan secara langsung semua kata dalam satu perintah menggunakan backtick
console.log(' ');
// ---------------------------------------

/*
2. Index Accessing - 1 by 1
Problem
Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints
Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal 
menggunakan simbol + untuk 
membentuk kata
tersebut!
*/

let word2 = "Wow Javascript is so cool"
let firstword2 = word2[0] + word2[1] + word2[2];
let secondword2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] +  word2[13];
let thirdword2 = word2[15] + word2[16];
let fourthword2 = word2[18] + word2[19];
let fifthword2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log('First word : '+firstword2);
console.log('Second word : '+secondword2);
console.log('Third word : '+thirdword2);
console.log('Fourth word : '+fourthword2);
console.log('Fifth word : ' +fifthword2);

//-------------------------
console.log(' ');
//-------------------------

// 3. Breaking Sentence (Again) using Substring
// // Problem
// // Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let FirstWord3 = word3.substring(0, 3);
let SecondWord3 = word3.substring(4, 14);
let ThirdWord3 = word3.substring(15, 17);
let FourthWord3 = word3.substring(18, 20);
let FifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + FirstWord3);
console.log('Second Word: ' + SecondWord3);
console.log('Third Word: ' + ThirdWord3);
console.log('Fourth Word: ' + FourthWord3);
console.log('Fifth Word: ' + FifthWord3);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';

let FirstWord4 = word4.substring(0, 3);
let SecondWord4 = word4.substring(4, 14);
let ThirdWord4 = word4.substring(15, 17);
let FourthWord4 = word4.substring(18, 20);
let FifthWord4 = word4.substring(21, 25);

let firstWord4Length = FirstWord4.length;
let secondWord4Length = SecondWord4.length;
let thirdWord4Length = ThirdWord4.length;
let fourthWord4Length = FourthWord4.length;
let fifthWord4Length = FifthWord4.length;

console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + SecondWord4 + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + ThirdWord4 + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + FourthWord4 + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + FifthWord4 + ', with length: ' + fifthWord4Length);