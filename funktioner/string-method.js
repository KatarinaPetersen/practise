var text ="Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.";
function shorten(tekst,lenght){
    text = tekst.slice(0,lenght);
}
shorten(text, 11);
console.log(text);

