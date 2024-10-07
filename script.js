const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance", "160"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc"))
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"           

const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"

