//Antenna Rick
let API = "https://rickandmortyapi.com/api/character/19";
let primera_api = "";
fetch(API)
  .then((response) => response.json())
  .then((data) => {
    primera_api += `<p class="nombre">${data.name}</p>`;
    primera_api += `<img src="${data.image}" class="imagen"/>`;
    primera_api += `<p class="especie api_1">${data.status}---${data.species}</p>`;
    primera_api += `<p class="locacion api_1">visto por itima vez: <br> ${data.location.name}</p>`
    primera_api += `<p class="origen api_1">De origen: ${data.origin.name}</p>`
    document.getElementById("apartado_1").innerHTML = primera_api;
    console.log(data);
  });
//policia morty
let morty = "";
let fast=""
fetch("https://rickandmortyapi.com/api/character/73")
  .then((response) => response.json())
  .then((data) => {
    morty += `<p class="Nombre">${data.name}</p>`;
    morty += `<img src="${data.image}" class="imagen"/>`;
    morty += `<p class="estatus_de_morty api_2">${data.status}---${data.species}</p>`;
    morty += `<p class="locacion_de_morty api_2">visto por ultima vez:<br> ${data.location.name}</p>`;
    morty += `<p class="origen_morty api_2">De origen: ${data.origin.name}</p>`
    document.getElementById("apartado_2").innerHTML = morty;
    console.log(data);
  })
  .catch((err) => console.log("error en el servidor"));

//baby morty
let baby_morty = "";
fetch("https://rickandmortyapi.com/api/character/805")
  .then((response) => response.json())
  .then((data) => {
    baby_morty += `<p class="baby_morty ">${data.name} </p>`;
    baby_morty += `<img src="${data.image}" class="imagen"/>`;
    baby_morty += `<p class="baby_morty_especie api_3">${data.status}---${data.species}</p>`;
    baby_morty += `<p class="baby_morty_locacion api_3">visto por ultima vez: <br>${data.location.name}</p>`;
    baby_morty += `<p class="baby_origen api_3">De origen: ${data.origin.name}</p>`
    document.getElementById("apartado_3").innerHTML = baby_morty;
    console.log(data);
  });
//Rick
let Rick = "";
fetch("https://rickandmortyapi.com/api/character/285")
  .then((response) => response.json())
  .then((data) => {
    Rick += `<p class="rick_name">${data.name}</p>`;
    Rick += `<img src="${data.image}" class="imagen"/>`;
    Rick += `<p class="rick_especie api_4">${data.status}---${data.species}</p>`;
    Rick += `<p class="rick_locacion api_4">visto por ultima vez: <br>${data.location.name}</p>`;
    Rick += `<p class="rick_origen api_4">De origen: ${data.origin.name}</p>`
    document.getElementById("apartado_4").innerHTML = Rick;
    console.log(data);
  });
//General

let general=""
fetch('https://rickandmortyapi.com/api/character/757')
.then(response=> response.json())
.then(data=>{
  general += `<p class="general_name">${data.name}</p>`;
  general += `<img src="${data.image}" class="imagen"/>`;
  general += `<p class="general_especie api_5">${data.status}---${data.species}</p>`;
  general += `<p class="general_locacion api_5">visto por ultima vez: <br>${data.location.name}</p>`;
  general += `<p class="general_origen api_5">De origen: ${data.origin.name}</p>`
  document.getElementById("apartado_5").innerHTML=general
  console.log(data)
})
//brujo
let brujo=""

fetch('https://rickandmortyapi.com/api/character/682')
.then(response=> response.json())
.then(data=>{
  brujo += `<p class="brujo_name">${data.name}</p>`;
  brujo += `<img src="${data.image}" class="imagen"/>`;
  brujo += `<p class="brujo_especie api_6">${data.status}---${data.species}</p>`;
  brujo += `<p class="brujo_locacion api_6">visto por ultima vez: <br>${data.location.name}</p>`;
  brujo += `<p class="brujo_origen api_5">De origen: ${data.origin.name}</p>`
  document.getElementById("apartado_6").innerHTML=brujo
  console.log(data)
})

//articia

let articia=""

fetch('https://rickandmortyapi.com/api/character/26')
.then(response=> response.json())
.then(data=>{
  articia += `<p class="articia_name">${data.name}</p>`;
  articia += `<img src="${data.image}" class="imagen"/>`;
  articia += `<p class="articia_especie api_7">${data.status}---${data.species}</p>`;
  articia += `<p class="articia_locacion api_7">visto por ultima vez: <br>${data.location.name}</p>`;
  articia += `<p class="articia_origen api_7">De origen: ${data.origin.name}</p>`
  document.getElementById("apartado_7").innerHTML=articia
  console.log(data)
})
//precidente
let precidente=""

fetch('https://rickandmortyapi.com/api/character/767')
.then(response=> response.json())
.then(data=>{
  precidente += `<p class="precidente_name">${data.name}</p>`;
  precidente += `<img src="${data.image}" class="imagen"/>`;
  precidente += `<p class="precidente_especie api_8">${data.status}---${data.species}</p>`;
  precidente += `<p class="precidente_locacion api_8">visto por ultima vez: <br>${data.location.name}</p>`;
  precidente += `<p class="precidente_origen api_8">De origen: ${data.origin.name}</p>`
  document.getElementById("apartado_8").innerHTML=precidente
  console.log(data)
})


let precident=""

fetch('https://rickandmortyapi.com/api/character/676')
.then(response=> response.json())
.then(data=>{
  precident += `<p class="perro_name">${data.name}</p>`;
  precident += `<img src="${data.image}" class="imagen"/>`;
  precident += `<p class="perro_especie api_9">${data.status}---${data.species}</p>`;
  precident += `<p class="perro_locacion api_9">visto por ultima vez: <br>${data.location.name}</p>`;
  precident += `<p class="perro_origen api_9">De origen: ${data.origin.name}</p>`
  document.getElementById("apartado_9").innerHTML=precident
  console.log(data)
})