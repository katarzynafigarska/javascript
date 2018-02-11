var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];  //liczone jest od 0

//console.log( imiona[2] );   //dostajemy sie do Kasia

console.log(imiona);

imiona[5] = "Monika";   //dodajemy do tablicy Monika
imiona[6] = "Marcin";   //dodajemy do tablicy Marcin

console.log(imiona);

// push dodaje element na końcu tablicy i z automatu przypisze kolejny indeks
imiona.push("Mikołaj", "Adam");

imiona.pop();   // pop usuwa ostatni element z tablicy, z srodka nie możemy usunąc
console.log(imiona);


//var usunietyElement = imiona.pop();  //pokazanie usunietego elementu
//console.log(usunietyElement);


//wstawianie elementu na poczatku tablicy
imiona.unshift("Kasia", "Michał");
console.log(imiona);


//usuwanie elementu z początku tablicy
imiona.shift();
console.log(imiona);


//sprawdzenie ilości elementów tablicy
console.log(imiona.length);


// rozbijanie tablicy na ciąg tekstowy
var tablicaJakoTekst = imiona.join();
console.log(tablicaJakoTekst);


//odwracanie tablicy
var imionaReverse = imiona.reverse();
console.log(imionaReverse);


// sortowanie tablicy (alfabetycznie)
var posortowana = imiona.sort();
console.log(posortowana);


