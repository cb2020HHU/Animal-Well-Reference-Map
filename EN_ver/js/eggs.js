let red_icon_s = L.icon({
  iconUrl: "../icons/red_icon_s.png",
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [-3, -56],
});

let egg_icon_s = L.icon({
  iconUrl: "../icons/egg_icon_s.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [-3, -56],
});

const map = L.map("gamemap", {
  crs: L.CRS.Simple,
  minZoom: -3,
  maxZoom: 1,
});

let bounds = [
  [-91, -114],
  [2166, 3954],
];

const image = L.imageOverlay("../imgs/animal_well_map2.png", bounds).addTo(map);

map.fitBounds(bounds);

let markerGroup = L.layerGroup().addTo(map);

layer_state = false;
let button_show = document.getElementById("showall");
button_show.onclick = function () {
  if (!layer_state) {
    button_show.innerText = "Hide all eggs";
    layer_state = true;

    for (let i = 0; i < eggs_latlng.length; i++) {
      L.marker([eggs_latlng[i].lat, eggs_latlng[i].lng], { icon: egg_icon_s })
        .addTo(markerGroup)
        .bindPopup(eggs_latlng[i].tip);
    }
  } else {
    button_show.innerText = "Show all eggs";
    layer_state = false;

    markerGroup.clearLayers();
  }
};

let img_map = document.getElementById("img_egg_map");

for (let i = 0; i < egg_img_areas.length; i++) {
  let area_egg = document.createElement("area");
  area_egg.shape = "rect";
  area_egg.coords = egg_img_areas[i].coords;

  img_map.appendChild(area_egg);
}

img_map.onclick = function (e) {
  markerGroup.clearLayers();

  index_e = Array.from(e.target.parentNode.children).indexOf(e.target);

  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });

  L_position = [eggs_latlng[index_e].lat, eggs_latlng[index_e].lng];
  L.marker(L_position, { icon: egg_icon_s })
    .addTo(markerGroup)
    .bindPopup(eggs_latlng[index_e].tip);
  map.flyTo(L_position, 1);
};
