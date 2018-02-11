var imie = "Czesław";

var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function( paramImie ) {    //funkcje w obiektach to metody
        this.imie = paramImie;
        console.log( "Osoba to:" + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);   // dostawanie się do obiektu I sposób
console.log(osoba["nazwisko"]);   // dostawanie się do obiektu II sposób
osoba.wyswietlSzczegoly("Ela");


// dodawanie właściwości
osoba.wiek = 36;
console.log(osoba.wiek);
osoba.wyswietlWiek = function() {
    console.log(this.wiek);
}

//osoba.wyswietlWiek();

