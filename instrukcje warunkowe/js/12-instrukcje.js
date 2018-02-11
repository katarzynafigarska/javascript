var liczba1 = 13;
var liczba2 = 6;
var prawda = true;

var pietro = 14;

if( liczba1 > liczba2 && pietro == 14 ) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
}

if( liczba1 > liczba2 || pietro == 14 ) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
}

if( prawda ) { 
    console.log("Spełnione zostały dwa warunki, także TRUE"); //wyswietli bo to jest poprostu true
}

if( !prawda ) { 
    console.log("Spełnione zostały dwa warunki, także TRUE"); //nie wyswietli bo to jest negacja
}


if( !liczba1 < liczba2) {    //jesli wyrazenie jest prawdziwe wstawimy ! to sie zrobi fałsz
    console.log("Spełnione zostały dwa warunki, także TRUE"); 
}


if( liczba1 == liczba2 ) {      //jak pierwszy warunek zostanie spełniony cała instrukcja ponizej juz nie zostaje sprawdzana
    console.log("Liczby są równe"); 
} else if (liczba1 < liczba2 ) {
    console.log("Liczba1 większa od liczby2");
} else if ( liczba1 == "smog" ) {
    console.log("liczba1 równa się smog");
} else {
    console.log("kod który wykona sie gdy żaden z warunków nie zostanie spełniony");
}



//if( liczba1 > liczba2 -! pietro == 14 ) {
   // console.log("Spełnione zostały dwa warunki, także TRUE");
//}

