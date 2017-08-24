// Den ukomprimerede version af en funktion i en variabel
var udskriv = function (value){
    console.log (value);
}
udskriv("Indholdet af den anonyme funktion")

// En koprimeret udgave af overstående
var udskriv = value => console.log(value);
udskriv("Her kommer det nye indhold af den komprimeret version");
