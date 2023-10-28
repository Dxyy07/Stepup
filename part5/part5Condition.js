/*
Algoritma soal 1:
    Nama game Proxytia
    Untuk memulai game Ada Dua variabel yang wajib kita isi
    yaitu variabel (Nama) dan (Peran) Jika nama Kosong maka Kita diarahkan untuk membuat nama terlebih dahulu
    dan akan muncul peringatan "Nama Wajib DI isi" 
    Jika variabel Peran kosong maka akan ada peringatan "Pilih Peranmu Untuk memulai game"
    Ada 3 peran yaitu = Ksatria, Tabib, dan Penyihir 
    - Jika Peran Ksatria Maka Outputnya (Halo Ksatria (nama) Kamu dapat mennyerang dengan senjatamu)
    - Jika Peran Tabib maka outputnya (Halo tabib (nama) Kamu akan membantu temanmu yang terluka)
    - Jika Peran Penyihir maka Outputnya (Halo Penyihir (nama) Ciptakan kaajaiban yang membantu kemenanganmu)
    - Jika peran yang dipilih ga ada maka outputnya (Tapi kayanya kamu jadi bot aja ya, peran yang kamu pilih ga ada)
*/
let nama="", peran="";
if(nama == ""){
    console.log('Nama Wajib Di isi')
    }else if(peran==""){
        console.log('Pilih peranmu untuk memulai game')
    }else if(nama == nama && peran=='ksatria'){
        console.log(`Halo ksatria ${nama} Kamu dapat menenyerang dengan Senjatamu`)
    }else if(nama == nama && peran=='tabib'){
        console.log(`Halo Tabib ${nama} Kamu akan membantu temanmu yang terluka`)
    }else if(nama == nama && peran=='penyihir'){
        console.log(`Halo Penyihir ${nama} Ciptakkan kaakaiban yang membantu kemenanganmu`)
    }else{
        console.log('Tapi Kayanya kamu Jadi bot aja ya, peran yang kamu pilih ga ada')
}

/*
Algoritma Soal no 2:
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
Disini kamu diminta untuk membuat format tanggal. 
Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
Gunakan switch case untuk kasus ini!
Contoh:
let hari = 21; let bulan = 1; let tahun = 1945;
Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
tips gunakan keyword ini di google "conditional switch case javascript"
dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
*/

let tanggal=31;
let bulan=12;
let tahun=2001;
switch (bulan){
    case 1 :
        bulan='January';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 2 :
        bulan='February';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 3 :
        bulan='March';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 4 :
        bulan='April';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 5 :
        bulan='May';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 6 :
        bulan='June';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 7 :
        bulan='July';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 8 :
        bulan='August';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 9 :
        bulan='September';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 10 :
        bulan='October';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 11 :
        bulan='November';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 12 :
        bulan='December';
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
}