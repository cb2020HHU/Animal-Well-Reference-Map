let red_icon_s = L.icon({
  iconUrl: "./icons/red_icon_s.png",
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [-3, -56],
});

let egg_icon_s = L.icon({
  iconUrl: "./icons/egg_icon_s.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [-3, -56],
});

let rabbit_icon_s = L.icon({
  iconUrl: "./icons/rabbit_icon_s.png",
  iconSize: [40, 60],
  iconAnchor: [20, 60],
  popupAnchor: [-3, -56],
});

let t_icons = [];
for (let i = 1; i <= tools.length; i++) {
  let each_icon = L.icon({
    iconUrl: "./icons/t" + i.toString() + "_icon.png",
    iconSize: [40, 60],
    iconAnchor: [20, 60],
    popupAnchor: [-3, -56],
  });
  t_icons.push(each_icon);
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

const image = L.imageOverlay("./imgs/animal_well_map2.png", bounds).addTo(map);

map.fitBounds(bounds);

let egg_marks_group = L.layerGroup();
for (let i = 0; i < eggs_latlng.length; i++) {
  L.marker([eggs_latlng[i].lat, eggs_latlng[i].lng], { icon: egg_icon_s })
    .addTo(egg_marks_group)
    .bindPopup(eggs_latlng[i].tip);
}

let rab_group = L.layerGroup();
for (let i = 0; i < rab_pos.length; i++) {
  L.marker([rab_pos[i].lat, rab_pos[i].lng], { icon: rabbit_icon_s })
    .addTo(rab_group)
    .bindPopup(rab_pos[i].tip);
}

let items_marks_group = L.layerGroup();
for (let i = 0; i < tools.length; i++) {
  L.marker([tools[i].lat, tools[i].lng], { icon: t_icons[i] })
    .addTo(items_marks_group)
    .bindPopup(tools[i].tip);
}

let sp_p_group = L.layerGroup();
for (let i = 0; i < spec_pos.length; i++) {
  L.marker([spec_pos[i].lat, spec_pos[i].lng], { icon: red_icon_s })
    .addTo(sp_p_group)
    .bindPopup(spec_pos[i].tip);
}

let basemap = {};

let overlayMaps = {
  蛋: egg_marks_group,
  兔子: rab_group,
  道具: items_marks_group,
  特殊地点: sp_p_group,
};
let laycontrol = L.control.layers(basemap, overlayMaps).addTo(map);
