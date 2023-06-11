import Phaser from "phaser";
// Part 1
import tiles from "assets/images/spritesheet.png";
import player from "assets/images/RPG_assets.png";
import map from "assets/data/map.json";
// Part 2
import dragonBlue from "assets/images/dragonblue.png";
import dragonOrange from "assets/images/dragonorrange.png";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // Part 1
    this.load.rexImageURI("tiles", tiles);
    this.load.tilemapTiledJSON("map", map);
    this.load.rexImageURI("player", player, {
      frameWidth: 16,
      frameHeight: 16,
    });

    // Part 2
    this.load.rexImageURI("dragonblue", dragonBlue);
    this.load.rexImageURI("dragonorrange", dragonOrange);
  }

  create() {
    this.scene.start("BattleScene");
  }
}
