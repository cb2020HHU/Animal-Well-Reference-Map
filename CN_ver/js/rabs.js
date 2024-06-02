let red_icon_s = L.icon({
  iconUrl: "../icons/red_icon_s.png",
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [-3, -56],
});

let rabbit_icon_s = L.icon({
  iconUrl: "../icons/rabbit_icon_s.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [-3, -56],
});

let n_icons = [];
for (let i = 1; i <= map_number.length; i++) {
  let each_icon = L.icon({
    iconUrl: "../icons/n" + i.toString() + "_icon.png",
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [-3, -26],
  });
  n_icons.push(each_icon);
}

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
    button_show.innerText = "隐藏所有兔子";
    layer_state = true;

    for (let i = 0; i < rab_pos.length; i++) {
      L.marker([rab_pos[i].lat, rab_pos[i].lng], { icon: rabbit_icon_s })
        .addTo(markerGroup)
        .bindPopup(rab_pos[i].tip);
    }
  } else {
    button_show.innerText = "显示所有兔子";
    layer_state = false;

    markerGroup.clearLayers();
  }
};

let img_map = document.getElementById("img_rab_map");

for (let i = 0; i < rab_img.length; i++) {
  let area_tool = document.createElement("area");
  area_tool.shape = "rect";
  area_tool.coords = rab_img[i].coords;

  img_map.appendChild(area_tool);
}

img_map.onclick = function (e) {
  markerGroup.clearLayers();

  index_e = Array.from(e.target.parentNode.children).indexOf(e.target);

  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });

  L_position = [rab_pos[index_e].lat, rab_pos[index_e].lng];
  L.marker(L_position, { icon: rabbit_icon_s })
    .addTo(markerGroup)
    .bindPopup(rab_pos[index_e].tip);
  map.flyTo(L_position, 1);
};

let tip_button_ = document.getElementById("tip_button");
tip_button_.onclick = function () {
  document.getElementById("hidden_tips").style.display = "";
  document.getElementById("hidden_tips").scrollIntoView({ behavior: "smooth" });
};

let tip_num = document.getElementById("tip_num");
tip_num.onclick = function () {
  markerGroup.clearLayers();

  for (let i = 0; i < map_number.length; i++) {
    number_line_points_pos = [];
    for (let j = 0; j < map_number[i].length; j++) {
      number_line_points_pos.push([map_number[i][j].lat, map_number[i][j].lng]);

      L.marker([map_number[i][j].lat, map_number[i][j].lng], {
        icon: n_icons[i],
      })
        .addTo(markerGroup)
        .bindPopup(map_number[i][j].tip);
    }
    console.log(number_line_points_pos);
    L.polyline(number_line_points_pos, { color: "red", weight: 3 }).addTo(
      markerGroup
    );
  }
  document.getElementById("gamemap").scrollIntoView({ behavior: "smooth" });
  map.flyTo([1045, 1925], -2);
};

let code_button_ = document.getElementById("code_button");
code_button_.onclick = function () {
  document.getElementById("hidden_codes").style.display = "";
  document
    .getElementById("hidden_codes")
    .scrollIntoView({ behavior: "smooth" });
};
