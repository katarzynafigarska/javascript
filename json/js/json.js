var wynik = {
    "osoby" : [
        {
            imie : "Adam",
            nazwisko: "Nowacki",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podroze"},
                {nazwa: "sport"},
            ]
        },
        {
            imie : "Marcin",
            nazwisko: "Konopka",
            wzrost: 185,
            zainteresowania: [
                {nazwa: "szachy"},
                {nazwa: "motoryzacja"},
            ]
        }
    ]
}

//console.log(wynik);


wynik.osoby.forEach(function( element, index ) {
    console.log( element.imie );
    console.log( element.nazwisko );
    console.log( element.wzrost );
    console.log( element.zainteresowania );   //jesli chcemy przejsc przez zainteresowania robimy kolejny forEach na zainteresowaniach
    
    
    element.zainteresowania.forEach( function( z, ind ) {
        console.log( z );
    });  
});




