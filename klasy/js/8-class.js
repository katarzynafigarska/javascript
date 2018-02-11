class Ogloszenie {
    constructor(tytul, opis, kontakt, cena) {     //wlasciwosci które dany obiekt posiada
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    
    wyswietlOgloszenie() {
        console.log( "Ogloszenie! Tytuł: " + this.tytul + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this.cena );
    }
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Świeżynka prosto od 80letniego Niemca", "605-557-421", 16000 );
ogloszenie1.wyswietlOgloszenie();


var ogloszenie2 = new Ogloszenie( "Sprzedam Audi", "Licznik nie cofany", "665245875", 20000 );
ogloszenie2.wyswietlOgloszenie();    //szablon metody 

console.log( typeof ogloszenie1 );




