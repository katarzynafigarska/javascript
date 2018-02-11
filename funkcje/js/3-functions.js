// funkcja bez parametrów

var zmienna1 = "Adam";  //zmienna globalna widoczna wszędzie

function zmiennaLokalna() {
    var zmienna1 = "Zmienna lokalna Adam";  //zmienna lokalna widoczna tylko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna tylko w funkcji";
    console.log(zmienna2);
}

zmiennaLokalna();

console.log(zmienna1);