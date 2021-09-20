var agora = new Date ()
var diaS = agora.getDay()
/*
0 - Domingp
1 - Segunda
2 - Terça
3 - Quarta
5 - Quinta
6 - Sexta
7 - Sábado
*/
console.log(diaS)
switch(diaS){
    case 0 :
    console.log("Domnigo")
    break
    case 1 :
        console.log("Segunda")
    break
    case 2 :
        console.log("Terça")
    break
    // Assim por diante...//
}