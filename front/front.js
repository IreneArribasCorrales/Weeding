function iniciarMap() {
  const coord = { lat: 40.3532381, lng: -3.8102437 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });

  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}

function iniciarMapa() {
  const coord = { lat: 40.2575963, lng: -3.9238035 };
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 10,
    center: coord,
  });

  const marker = new google.maps.Marker({
    position: coord,
    map: mapa,
  });
}
function initialize() {
  iniciarMap();
  iniciarMapa();
}
