

var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function() {    //funkcje w obiektach to metody
        console.log( "Osoba to:" + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);   // dostawanie się do obiektu I sposób
console.log(osoba["nazwisko"]);   // dostawanie się do obiektu II sposób
osoba.wyswietlSzczegoly();

