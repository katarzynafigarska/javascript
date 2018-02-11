//for ( wyrażenie początkowe ; wyrażenie warunkowe ; wyrażenie modyfikujące ) {
// instrukcje do wykonania
//}


//var ileRazy = 30;
//for ( var i = 0; i < ileRazy; i++ ) {
//    var iteracja = i + 1;
//    console.log("Iteracja pętli nr " + iteracja);
//}

var tablica = ["Audi", "Opel", "Honda", "Mazda", "Nissan", "Żuk", "Fiat"];

//for(var i = 0; i < tablica.length; i++) {
    //console.log("Tablica! Index = " + i + ", wartośc = " + tablica[i] );
//}

tablica.forEach(function(elementTablicy, indexTablicy) {
    console.log( "Index: " + indexTablicy + ", wartośc: " + elementTablicy );
});


//tablica.forEach(function(elementTablicy, indexTablicy) {
   // if( elementTablicy == "Mazda" ) {
   //    console.log( "Index: " + indexTablicy + ", wartośc: " + elementTablicy );
  //  }
//});

for( var i= 0; i < tablica.length; i++) {
    if( i == 2 ) {   //if( i == 2 || i == 4) {
        break;      //continue;}
    }
    console.log( i, tablica[i] );
}



