// ovelse 1
var increase = 1;

do{
    console.log (increase)
    increase++;
}while(increase < 10)

// ovelse 2
var talOp = 1;

while (talOp < 25){
    console.log (talOp + "while");
    talOp++;
}

do{
    console.log (talOp + "do");
    talOp++;
}while (talOp < 25);

for(talOp = 1; talOp < 25; talOp++){
    console.log (talOp + "for");
}

// ovelse 3

var year = 2017;

for(year = 2017; year >= 1917; year--){
    console.log (year);
}
