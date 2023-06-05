//WORKED WITH GENIECE TIMS, JOHANN WILLIAMS, ELLIOT ANDERSON.
$(function () {
  let miami = [-80.19719610443641, 25.76504860987099];
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function updateWeather() {
    $.get("https://api.openweathermap.org/data/2.5/weather", {
      APPID: myOpenWeatherToken,
      lat: miami[1],
      lon: miami[0],
      units: "imperial",
    }).done(function (data) {
      // let name = data.name;
      // let mainInfo = data.main;
      console.log(data);
      // console.log(name);
      // console.log(mainInfo);
      $("#weather-info").html(
        `<div class="location-name"><h1>${
          data.name
        }</h1></div><div class="location-data"><p> Today's Highs and Lows: ${data.main.temp_min.toFixed(
          0
        )}&#8457 / ${data.main.temp_max.toFixed()}&#8457 <br> Wind Speed: ${
          data.wind.speed
        } <br> Description: ${data.weather[0].description}</p></div>`
      );
    });
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
      APPID: myOpenWeatherToken,
      lat: miami[1],
      lon: miami[0],
      units: "imperial",
    }).done(function (data) {
      console.log(data);
      let forecastHtmlString = "";
      for (let i = 0; i < data.list.length; i += 8) {
        let todayDate = new Date(data.list[i].dt * 1000);
        forecastHtmlString += `<div class="container-date"><h3>${
          daysOfWeek[todayDate.getDay()]
        }, ${
          monthsOfYear[todayDate.getMonth()]
        } ${todayDate.getDate()}</h3><p>${data.list[i].main.temp_min}/${
          data.list[i].main.temp_max
        }</p><p>${data.list[i].weather[0].description}</p></div>`;
      }
      $("#forecast-info").html(forecastHtmlString);
    });
  }
  updateWeather();
  console.log();

  // creates map
  mapboxgl.accessToken = myMapBoxToken;
  const coordinates = document.getElementById("coordinates");
  const map = new mapboxgl.Map({
    container: "map",
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12",
    center: miami,
    zoom: 5,
  });
  map.addControl(new mapboxgl.NavigationControl());
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

  $("#button").on("click", function (e) {
    e.preventDefault();
    geocode($("#search").val(), myMapBoxToken).then(function (result) {
      console.log(result);
      miami = result;
      marker.setLngLat(miami);
      map.flyTo({
        center: miami,
        duration: 3000,
        zoom: 12,
      });
      updateWeather();
    });
  });
});
