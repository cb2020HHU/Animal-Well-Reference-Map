<div align="center">
  <a href="https://yakia.misitebao.com/">
    <img src="assets/logo.png" width="222" height="206" />
  </a>

  <h1>Animal Well Reference Map</h1>
  <h2>动物井参考地图</h2>

  <p>
  Animal Well Reference Map is a map showing various things in the game "Animal Well". 
  </p>

  <div>
  <strong>
  <samp>

[English](README.md) · [简体中文](README.zh-Hans.md)

  </samp>
  </strong>
  </div>
</div>

## Introductions

This work is a map to show the items in the game "Animal Well", which contains: eggs, rabbits, tools, etc.
It provides a fast way to check the position of items in the game map: just click the image of the item, and jump to the position on
the map.

### Background

This project is my work (practice) of learning HTML/CSS/JS. I played the game "Animal Well", and loved it very much. I think the existing map is not convenient, so I decided to make my version. The information (positions, tips, etc.)is from the website techraptor.net, you can check their articles for more details. The images are the screenshots of the game. I also made some icons to make it look nice.
This work is for convenience, if you haven't cleared the game yet, try to solve the puzzles by yourself.
The original version of this project is Chinese (The CN version), because I'm not a native English speaker, I tried to translate the project into English (the EN version)， maybe the English sentences are hard to understand, please check the articles of techraptor.net.
Because I'm not so good at writing web pages, the pages look rough, I just make it usable for my purpose, and I may update it in the future to make it better.

## Features

- Quick: just click the image and you will find it on the map.
- Provide positions of eggs, rabbits, and items.
- Easy to use: They are just several web pages.
- The map function is based on the Leaflet.js project.

## Getting Started

In the folder EN_ver, just open the index.html in the browser, and there are four pages:

Home page, contains the introduction and the map with several layers. You can press the button at the top-right corner to show the layers:

- Eggs: the position of 64 eggs in the egg room.
- Rabbits: the positions of 16 rabbits you need to collect.
- Items: 12 main items(tools) in the game.
- Positions: some special positions in the game.

Eggs page, which contains a button to show/hide all eggs, and an image of the egg room you can click, which will jump to the position on the map automatically.

<img src="assets/eggs_shot.PNG" width="420" height="450" />

Rabbits page, a page of 16 rabbits, similar to the Eggs page. You can also check the tips to collect the rabbits.

- In the tips region you may find other items you need.

<img src="assets/rabbits_shot.PNG" width="330" height="250" />

Items page, a page of 12 items(tools). similar to the Rabbits page, you can check the positions of items, and the tips.

- In the tips region you may find other items you need.

<img src="assets/tools_shot.PNG" width="420" height="380" />

## Contributors

Me, and the author of the articles about the game in techrattor.net Andrew Stretch. (I checked the positions and the tips in the articles.)

## The tools I used

- [Leaflet](https://github.com/Leaflet/Leaflet.git) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.

- [Inkscape](https://github.com/inkscape/inkscape) - Inkscape: Free and Open Source Vector Drawing
- [Visual Studio Code](https://github.com/microsoft/vscode) - Visual Studio Code is a distribution of the Code - OSS repository with Microsoft-specific customizations released under a traditional Microsoft product license.
- [GNU Image Manipulation Program](https://www.gimp.org/) - The Free & Open Source Image Editor

## License

[License MPL](LICENSE)
