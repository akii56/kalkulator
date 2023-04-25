let informacije = {

    text: `kalklulator racuna sve racunske operacije (+, -, *, /, √, x²). Racuna sa brojevima 9 i 4.` //mozete promeniti brojeve dole u kodu

}
console.log(informacije.text);

let nameproject = `kalkulator`

let info = {
    verzija: `3.0`,
    github: `https://github.com/akii56`,
}
console.log(`verzija ${nameproject}a je ${info.verzija}`);
console.log(`github: ${info.github}`);


let kalkulator = {
    sabiranje: function(prvi_broj, drugi_broj) {
    let resenje = prvi_broj + drugi_broj; 
    console.log(`${prvi_broj} + ${drugi_broj} = ${resenje}`)
    },
    oduzimanje: function(prvi_broj, drugi_broj) {
        let resenje = prvi_broj - drugi_broj;
        console.log(`${prvi_broj} - ${drugi_broj} = ${resenje}`)
    },
    mnozenje: function(prvi_broj, drugi_broj) {
        let resenje = prvi_broj * drugi_broj;
        console.log(`${prvi_broj} * ${drugi_broj} = ${resenje}`)
    },
    deljenje: function(prvi_broj, drugi_broj) {
        let resenje = prvi_broj / drugi_broj
        console.log(`${prvi_broj} / ${drugi_broj} = ${resenje}`)
    },
    koren: function(x) {
        let korenovan = Math.sqrt(x)
        console.log(`Koren broja ${x} je ${korenovan}`);
    },
    na_kvadrat: function(x) {
        let kvadriran = Math.pow(x,2)
        console.log(`Kvadrat broja ${x} je ${kvadriran}`); 
    }
}


//Ovde se menjaju brojevi sa kojim se rade racunske operacije

kalkulator.sabiranje(9,4);
kalkulator.oduzimanje(9,4);
kalkulator.mnozenje(9,4);
kalkulator.deljenje(9,4);
kalkulator.koren(4);
kalkulator.na_kvadrat(4);
