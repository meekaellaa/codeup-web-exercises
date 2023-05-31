$(function () {
  let miami = [-80.19719610443641, 25.76504860987099];
  function updateWeather() {
    $.get("https://api.openweathermap.org/data/2.5/weather", {
      APPID: myOpenWeatherToken,
      lat: miami[1],
      lon: miami[0],
      units: "imperial",
    }).done(function (data) {
      console.log(data);
    });
  }
  updateWeather();
  // creates map
  mapboxgl.accessToken = myMapBoxToken;
  const coordinates = document.getElementById("coordinates");
  const map = new mapboxgl.Map({
    container: "map",
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12",
    center: miami,
    zoom: 2,
  });
  //creates marker
  const marker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat(miami)
    .addTo(map);
  // gets coordinates and displays it
  function onDragEnd() {
    const lngLat = marker.getLngLat();
    miami = [];
    miami.push(lngLat.lng, lngLat.lat);
    coordinates.style.display = "block";
    // let newCoordinates = [lngLat.lat, lngLat.lng];
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    updateWeather();
  }
  marker.on("dragend", onDragEnd);
});
// $(`#forecast`).html(html);
// $("#weather").html();
