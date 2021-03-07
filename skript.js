function a(event) {
    event.preventDefault();
    var artikel = document.getElementById("artikel");
    console.log(artikel.value);
    var size = document.getElementById("size");
    console.log(size.value);

    var female = document.getElementById("female");
    if (female.checked) {
        console.log("female");
    }
    var male = document.getElementById("male");
    if (male.checked) {
        console.log("male");
    }
    var unisex = document.getElementById("unisex");
    if (unisex.checked) {
        console.log("unisex");
    }
    var monat = document.getElementById("monat");
    console.log(monat.value);
    var preis = document.getElementById("preis");
    console.log(preis.value);
}
