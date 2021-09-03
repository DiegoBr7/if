// console.log('estou aprendendo !');
// console.log('estou aprendendo !');
// console.log('estou aprendendo !');
// console.log('estou aprendendo !');
// console.log('estou aprendendo !');
// console.log('estou aprendendo !');

// 1.for

for (let i = 5 ; i >= 1 ; i--) {
    if( i % !==0){
        console.log(i);
    }
}

// while loop 
let i = 5;

while (i >= 1) {
    if (i % 2 !==0) {
        console.log(i) ;
    }
    i--;
}

// Do .. While
let i = 0;
do {
    console.log('digitando!',i);
    i++;
} while (i < 10)

const pessoa = {
    nome : 'Jhonathan',
    idade : 25
};

//key-value
for (let chave in pessoa){
     console.log(chave,pessoa['nome']);
}
const cores =['vermelho','azul','verde']  

for (let indice in cores) {
    console.log(indice,cores[indice])
}