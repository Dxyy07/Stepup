// Soal 1
/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat 
menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling() {
    let result = [];
    let index0,index1,index2,index3,index4;
    for (let i = 0; i < input.length; i++){
        index0 = input[i][0];
        index1 = input[i][1];
        index2 = input[i][2];
        index3 = input[i][3];
        index4 = input[i][4];
        result.push(`Nomor ID : ${index0}\nNama Lengkap : ${index1}\nTTL : ${index2} ${index3}\nHobi : ${index4}\n`)
    }
    return result.join(`\n`);
}
console.log(dataHandling());


/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/
console.log('======================================');

//soal2
let input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input1) {
    input1.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input1);
    let splitInput = input1[3].split('/')
    if (splitInput[1] == 5){
        console.log('Mei')
    }
    let Date = [splitInput[2], splitInput[0], splitInput[1]]
    console.log(Date)
    console.log(splitInput.join(`-`));
    let slicedInput1= input1[1].slice(0,15)
    console.log(slicedInput1)
}

dataHandling2(input1);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */