//Soal 1
console.log('LOOPING PERTAMA');

let i = 0;
while (i < 5){
    console.log(i + ' Looping Maju')
    i++;
}
console.log('LOOPING KEDUA');
let j = 4;
while (j >= 0){
    console.log(j + ' Looping Mundur')
    j--;
}
console.log(' ')
console.log ('----------------------');
console.log(' ')
//2
console.log('LOOPING PERTAMA')
for (let i=0; i < 5; i++){
    console.log(`${i} Looping Maju`)
}

console.log('LOOPING KEDUA');
for (let j=4; j>=0; j--){
    console.log(`${j} Looping Mundur`)
}
console.log(' ')
console.log ('----------------------');
console.log(' ')
//3
for (let j=0; j<=100; j++){
    if (j%2==0){
        console.log(j +' Adalah Angka Genap')
    }
    else{
        console.log(j+' Adalah Angka Ganjil')
    }
}

console.log(' ')
console.log ('----------------------');
console.log(' ')

//4
for (j=1; j<=1; j++){
    for(let k=1; k<=100; k+=2){
        if(k%3===0){
            console.log(`${k} Adalah Kelipatan 3`);
        }
        else{
            console.log(k);
        }
    }
    console.log('')
    for(let k=1; k<=100; k+=5){
        if(k%6===0){
            console.log(`${k} Adalah Kelipatan 6`);
        }
        else{
            console.log(k);
        }
    }
    console.log('')
    for(let k=1; k<=100; k+=9){
        if(k%10===0){
            console.log(`${k} Adalah Kelipatan 10`);
        }
        else{
            console.log(k);
        }
    }
}

console.log(' ')
console.log ('----------------------');
console.log(' ')

//5
let result = ""
for(let i = 1;i<=5;i++) {
    for(let j = 1;j<=i;j++) {
    result+="*"
    }
    result+=`\n`
}
console.log(result)
