// Betinget sætninger

//if - else
if (false){ // if er en funktion og true er betingelsen - i dette tilfælde en boolean (true eller false)
    console.log ('kodeblokken udføres'); // console.log udskriver beskeden i terminalen
}
else { // hvis værdien af funktionen ændres til false, vil denne besked fremkomme i stedet, da værdien af funktionen ikke er opfyldt
    console.log ('kodeblokken udføres IKKE');
}

// ternary operator
var work_harder = true;
var result = work_harder ? "Sæt tempoet op" : "Fint tempo";
console.log (result);