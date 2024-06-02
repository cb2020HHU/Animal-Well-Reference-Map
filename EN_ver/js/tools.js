let red_icon_s = L.icon({
  iconUrl: "../icons/red_icon_s.png",
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [-3, -56],
});

let t_icons = [];
for (let i = 1; i <= tools.length; i++) {
  let each_icon = L.icon({
    iconUrl: "../icons/t" + i.toString() + "_icon.png",
    iconSize: [40, 60],
    iconAnchor: [20, 60],
    popupAnchor: [-3, -56],
  });
  t_icons.push(each_icon);
}

let match_icon = L.icon({
  iconUrl: "../icons/match_icon_s.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [-3, -56],
});

let candle_icon = L.icon({
  iconUrl: "../icons/candle_icon_s.png",
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
    markerGroup.clearLayers();
    button_show.innerText = "Hide all items";
    layer_state = true;

    for (let i = 0; i < tools.length; i++) {
      L.marker([tools[i].lat, tools[i].lng], { icon: t_icons[i] })
        .addTo(markerGroup)
        .bindPopup(tools[i].tip);
    }
  } else {
    button_show.innerText = "Show all items";
    layer_state = false;

    markerGroup.clearLayers();
  }
};

let img_map = document.getElementById("img_tool_map");

for (let i = 0; i < tool_img_coords.length; i++) {
  let area_tool = document.createElement("area");
  area_tool.shape = "rect";
  area_tool.coords = tool_img_coords[i].coords;

  img_map.appendChild(area_tool);
}

img_map.onclick = function (e) {
  markerGroup.clearLayers();

  index_e = Array.from(e.target.parentNode.children).indexOf(e.target);

  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });

  L_position = [tools[index_e].lat, tools[index_e].lng];
  L.marker(L_position, { icon: t_icons[index_e] })
    .addTo(markerGroup)
    .bindPopup(tools[index_e].tip);
  map.flyTo(L_position, 1);
};

let tip_kagan = document.getElementById("tip_kagan");
tip_kagan.onclick = function () {
  markerGroup.clearLayers();
  for (let i = 0; i < Kangaroos.length; i++) {
    L.marker([Kangaroos[i].lat, Kangaroos[i].lng], { icon: red_icon_s })
      .addTo(markerGroup)
      .bindPopup(Kangaroos[i].tip);
  }
  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });
  map.flyTo([1045, 1925], -2);
};

let cats_codes = document.getElementById("tip_5cats");
cats_codes.onclick = function () {
  markerGroup.clearLayers();
  for (let i = 0; i < cats_and_codes.length; i++) {
    L.marker([cats_and_codes[i].lat, cats_and_codes[i].lng], {
      icon: red_icon_s,
    })
      .addTo(markerGroup)
      .bindPopup(cats_and_codes[i].tip);
  }
  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });
  map.flyTo([1045, 1925], -2);
};

let candles_matches = document.getElementById("tip_UV");
candles_matches.onclick = function () {
  markerGroup.clearLayers();
  for (let i = 0; i < candles.length; i++) {
    L.marker([candles[i].lat, candles[i].lng], {
      icon: candle_icon,
    })
      .addTo(markerGroup)
      .bindPopup(candles[i].tip);
  }
  for (let i = 0; i < matches.length; i++) {
    L.marker([matches[i].lat, matches[i].lng], {
      icon: match_icon,
    })
      .addTo(markerGroup)
      .bindPopup(matches[i].tip);
  }
  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });
  map.flyTo([1045, 1925], -2);
};

let remote_ = document.getElementById("tip_remote");
remote_.onclick = function () {
  markerGroup.clearLayers();
  for (let i = 0; i < remote_stuff.length; i++) {
    L.marker([remote_stuff[i].lat, remote_stuff[i].lng], {
      icon: red_icon_s,
    })
      .addTo(markerGroup)
      .bindPopup(remote_stuff[i].tip);
  }
  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });
  map.flyTo([1045, 1925], -2);
};

let tip_button_ = document.getElementById("tip_button");
tip_button_.onclick = function () {
  document.getElementById("hidden_tips").style.display = "";
  document.getElementById("hidden_tips").scrollIntoView({ behavior: "smooth" });
};

let code_button_ = document.getElementById("tip_code");
code_button_.onclick = function () {
  document.getElementById("hidden_code").style.display = "";
  document.getElementById("hidden_code").scrollIntoView({ behavior: "smooth" });
};
