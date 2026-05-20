var issoEumaString = "Isso é uma string";
let issoEumnumero = 42;
const issoEumBooleano = true;
let issoTambemEumaString = "42";
//A String fica entre aspas ' e ""
//var = variável

if (issoEumnumero == issoEumaString){
    console.log("As strings são iguais")
} else {
    console.log("As strings são diferentes");
}
//A String não soma com o número, apenas replica
 console.log(issoEumnumero + issoTambemEumaString);

//Apenas número com número que se somam
 console.log(issoEumnumero + issoEumnumero);

 var issoEumaGlobal = "Eu sou uma variável global";

 {
    let issEumalocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal)
    console.log(issEumalocal)
 }

 console.log(issoEumaGlobal);
 //erro pois está fora do bloco

 let floatvalue1 = 0.06;
 let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2

 //as casas decimais são muito amplas então para definir o numero que queremos na soma comum usamos: a soma dos dois valores mais:
 console.log(sum.toPrecision(2)); 

 //imprimir numero pares de zero ate 10 com for
 for (let i = 0; i < 5; i++){
console.log (i);
console.log (i*2)
console.log(i*2+1)
 }


 //imprimir numeros impares com while
 let j = 0;
 while (j < 5) {
    console.log (j*2+1); 
    j++;
 }

console.log(Math.PI);
console.log(Math.E);
console.log(Math.pow(2,3))
console.log(Math.random());
console.log(Math.cos(90));//número aleatorio entre 0 e 9

//Gerando numeros primos entre 1 e 100
function isPrime(num) {
    if (num<= 1) return false;
    for (let i=2; i <= Math.sqrt(num); i++) {
        
    }
}

