// Betinget sætninger

///////////////////////////////////////// if - else
if (false) { // if er en funktion og true er betingelsen - i dette tilfælde en boolean (true eller false)
    console.log('kodeblokken udføres'); // console.log udskriver beskeden i terminalen
}
else { // hvis værdien af funktionen ændres til false, vil denne besked fremkomme i stedet, da værdien af funktionen ikke er opfyldt
    console.log('kodeblokken udføres IKKE');
}

// ternary operator. En måde at komprimere koden
var work_harder = true;
var result = work_harder ? "Sæt tempoet op" : "Fint tempo";
console.log(result);

// if - else if - else
var navn = "Katarina";

if (navn == "Camilla") {
    console.log("Hej Camilla");
} else if (navn == "Poul") {
    console.log("Hej Poul");
} else { // udføres hvis ingen af de andre parametre er opfyldt
    console.log("Nå der var du, Katarina");
}

// switch - case. En mere overskuelig måde end if - else

var navn = "Finn";

switch (navn) {
    case "Per":
        console.log("Hej Per");
        break;
    case "Tina":
        console.log("Hej Tina");
        break;
    case "Finn":
        console.log("Hej Finn");
        break;
    default:
        console.log("Hej Katarina");
        break;
}

//ovelse 1
var boolean = false; // hvis vædien sættes til false, udskrives beskeden ikke
if (boolean == true) {
    console.log("Hej verden")
}

//ovelse 2

var tal = 4;
if (tal > 5) {
    console.log(tal + " er højere end 5");
} else {
    console.log(tal + " er lavere end 5");
}

// ovelse 3
var tal = 8;
var result = tal ? tal + " er højere end 5" : tal + " er lavere end 5";
console.log(result);

// ovelse 4
var favorit_drik = "Vand";

if (favorit_drik == "Te") {
    console.log("Dette er ikke kaffe, men jeg kan også godt lide te");
} else if (favorit_drik == "Sodavand") {
    console.log("Det er jo heller ikke kaffe, men sodavand smager godt");
} else if (favorit_drik == "Vand") {
    console.log("Ej nu vil jeg have kaffe, selvom vand er sundt");
} else {
    console.log("Endelig noget kaffe - tak for det!!");
}

// ovelse 5
var favorit_drik = "Sodavand";
switch (favorit_drik) {
    case "Te":
        console.log("Dette er ikke kaffe, men jeg kan også godt lide te");
        break;
    case "Sodavand":
        console.log("Det er jo heller ikke kaffe, men sodavand smager godt");
        break;
    case "Vand":
        console.log("Ej nu vil jeg have kaffe, selvom vand er sundt");
        break;
    default:
        console.log("Endelig noget kaffe - tak for det!!");
        break;

}