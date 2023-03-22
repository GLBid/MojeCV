"use strict";
const guzik = document.querySelector(".guzik");
const mojedane = document.querySelector(".dane");
const btn = document.querySelector(".btn");
const showjoke = document.querySelector(".zart");
const hobbies = document.getElementsByClassName("hobbies");
const mh = document.querySelector(".mh");
const hobby = document.querySelector(".hobby");
const hobo = document.querySelector(".hobo");
const zart = [
  "Jak się czuje ogórek w towarzystwie śmietany? Mizernie. ",
  "Dresiarz idzie do lasu a jakiś człowiek go pyta: gdzie idziesz? A dresiarz odpowiada: po ziomki. ",
  "Ile dni górnik ma urlopu po śmierci? 3 a potem znów pod ziemię",
  "Jak nazywa sie płacz małego raczka? Wycieraczka",
  "Spotyka się dwóch programistów: - Słyszałem, że straciłeś pracę. Jak to jest być bezrobotnym? - To było najgorsze pół godziny mojego życia!",
  "Żona do programisty: idź do sklepu kup 5 bułek, a jak będą jajka kup 10. Programista będąc w sklepie: - Są jajka? Sprzedawczyni: - Tak, są. Programista: To poproszę 10 bułek.",
  "Co robi programista po 8 piwach? cout",
  "int kobieta; //kobieta zmienną jest",
  "Rozmawia dwóch informatyków, jeden mówi do drugiego: - Słuchaj, może pożyczysz mi 500 PLN, no powiedzmy 512 tak dla równego rachunku.",
  "Impreza informatyków. Wódka leje się szerokopasmowym strumieniem. Dwóch adminów pije bruderszafta:- To co? Mówmy sobie po IP!",
  " Dlaczego programista na umycie głowy zużywa całą butelkę szamponu? – Bo w instrukcji jest napisane: nałożyć, spłukać, czynność powtórzyć.",
];

let number = Math.trunc(Math.random() * 6) + 1;

btn.addEventListener("click", function () {
  number = Math.trunc(Math.random() * zart.length);
  showjoke.textContent = zart[number];
});

function kontaktHover() {
  mojedane.classList.remove("hidden");
}

function psik() {
  mojedane.classList.add("hidden");
}

hobby.addEventListener("click", function () {
  console.log(hobbies);
  mh.classList.toggle("none");
  hobo.classList.toggle("none");
  hobo.classList.toggle("hoboactive");
});
