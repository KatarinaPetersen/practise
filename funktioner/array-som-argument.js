var mig = ["Katarina", "Petersen", 1979];

var profil = function (p) {
    return p[0] + " " + p[1] + " Født: " + p[2]; //retunerer teksts-strengen
}
console.log (profil(mig));

// //ovelse 3

var data = ["Katarina", "Petersen", 1979]; // array

var profil = function (p) {
    var nu = 2017;
    var alder = nu-p[2];
    return p[0] + "\n" + p[1] + "\n" + "Født:" + p[2] + " " + "\n" + "Alder:" + alder; // "\n" linjeskift
}
console.log (profil(data));

