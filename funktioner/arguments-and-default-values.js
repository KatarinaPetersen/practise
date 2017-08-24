// Ved flere argumenter i en funktion adskilles de af et komma

// Default value er når argumenterne er givet en værdi på forhånd
// Når funktionen kaldes, kan den udskrives uden værdier eller tilføjes en værdi

function add(x = 0, y = 0){
console.log(`x er lig med ${x} og y er lig med ${y}. sum: ` , x + y);
}
add();
add(4, 6);