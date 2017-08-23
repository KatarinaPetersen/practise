// ovelse 1
var navne = ['Alex', 'Børge', 'Carl', 'Dennis', 'Egon', 'Frode', 'Gunnar', 'Hans'];

navne.forEach(function(navne){
    console.log (navne);
});

// ovelse 2
var kunstnere = ['Picasso', 'Coco Electra', 'Monet', 'Dennis Jurgensen'];

kunstnere.forEach(function(kunstnere, index){
    console.log (kunstnere + " er nummer " + index + " i array´et");
});

// ovelse 3

var tallene = [11, 22, 13, 44, 15, 67, 7, 78, 29, 10];
tallene.forEach(function (tal, index, array) {
    if (tal > array[index + 1]) {
        console.log("Tallet" + " " + [tal] + " " + "er større end det næste i rækken");
    }
else {
        console.log("Tallet" + " " + [tal] + " " + "er mindre end det næste i rækken");
    }
});