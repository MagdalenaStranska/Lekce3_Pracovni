const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance", "160"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc"))
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"              