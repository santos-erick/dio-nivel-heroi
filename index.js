const nickname = "Erick"
const experiencia = " 7000 "

let nivel

if (experiencia < 1000) {
    nivel = "Ferro";

} else if (experiencia <= 2000) {
    nivel = "Bronze";

} else if (experiencia <= 5000) {
    nivel = "Prata";

} else if (experiencia <= 7000) {
    nivel = "Ouro";

} else if (experiencia <= 8000) {
    nivel = "Platina";

} else if (experiencia <= 9000) {
    nivel = "Ascendente";

} else if (experiencia <= 10000) {
    nivel = "Imortal";

} else {
    nivel = "Radiante";
}


console.log(`O Herói de nome ${nickname} está no nível de ${nivel}`);