// // ovelse 1
// // A. Udskriv profil
// function mee(navn, efternavn, dato) { //funktionen mee indeholder ARGUMENTERNE navn, efternavn og dato
//     console.log(navn + " " + efternavn + " " + dato); // VÆRDIERNE af ARGUMENTERNE bliver udskrevet i terminalen
// }
// mee('Katarina', 'Petersen', '13. december 1979'); //Der foretages FUNKTIONSKALD og VÆRDIERNE til ARGUMENTERNE bliver overført

// // B. Regnefunktioner

// function plus(tal1, tal2) {
//     console.log (tal1 + tal2);
// }
// function minus(tal1, tal2) {
//     console.log (tal1 - tal2);
// }
// function gange(tal1, tal2) {
//     console.log (tal1 * tal2);
// }
// function divider(tal1, tal2) {
//     console.log (tal1 / tal2);
// }

// plus(2, 4);
// minus(2, 4);
// gange(2, 4);
// divider(2, 4);



var result = 0;

function plus(num){
    result += num;
    console.log(result);
}
function minus(num){
    result -= num;
    console.log(result);
}
function gange(num){
    result *= num;
    console.log(result);
}
function divider(num){
    result /= num;
    console.log(result);
}
plus(20);
minus(16);
gange(2);
divider(3);
