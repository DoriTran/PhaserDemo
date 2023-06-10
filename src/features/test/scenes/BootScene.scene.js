/* eslint-disable class-methods-use-this */
import Phaser from "phaser";
import tiles from "assets/images/spritesheet.png";
import player from "assets/images/RPG_assets.png";
import map from "assets/data/map.json";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("tiles", tiles);
    this.load.tilemapTiledJSON("map", map);
    this.load.spritesheet("player", player, {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // this.scene.start("WorldScene");
  }
}
