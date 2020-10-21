//Create map
const map = L.map("mapid").setView([-18.921428, -48.2701815], 15);
// var eu posso alterar em algum momento, então usamos const porque não iremos modificar;

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker; //Inicio uma variável vazia, mas posso modifica-lá

//Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon tileLayer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});
//Quando eu clicar no mapa uma função será executada, onde passamos pra dentro da função um event

//adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionanda
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Verificar se campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //Limpar o campo antes de add ao container de imagens
  input.value = "";

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //Deletar o campo
  span.parentNode.remove();
}

//Selecionar SIM ou NÃO

function toggleSelect(event) {
  //retirar a class .active (dos botões)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  /* Essa função é igual:
    .forEach( function(button) {
        button.classList.remove('active')
    }) */

  //colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;
}

function validate(event) {

  //validar se lat e lng estão preenchidos
  const needsLatAndLng = false;
  if(needsLatAndLng) {
    event.preventDefault()
    alert('Selecione um local no mapa')
  }

  
}