// ovelse 1
// A. Udskriv profil
function mee(navn, efternavn, dato) { //funktionen mee indeholder ARGUMENTERNE navn, efternavn og dato
    console.log(navn + " " + efternavn + " " + dato); // VÆRDIERNE af ARGUMENTERNE bliver udskrevet i terminalen
}
mee('Katarina', 'Petersen', '13. december 1979'); //Der foretages FUNKTIONSKALD og VÆRDIERNE til ARGUMENTERNE bliver overført

// B. Regnefunktioner

function plus(tal1, tal2) {
    console.log (tal1 + tal2);
}
function minus(tal1, tal2) {
    console.log (tal1 - tal2);
}
function gange(tal1, tal2) {
    console.log (tal1 * tal2);
}
function divider(tal1, tal2) {
    console.log (tal1 / tal2);
}

plus(2, 4);
minus(2, 4);
gange(2, 4);
divider(2, 4);



var result = 0;

function add(num){
    result += num;
}
add(10);

function sub(num){
    result -= num;
}
sub(5);

function mul(num){
    result *= num;
}
mul(4);

function div(num){
    result /= num;
}
div(5);

