/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import Phaser from "phaser";
import { CharacterScene } from "./Character.scene";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.plugin(
      "rexlive2dplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexlive2dplugin.min.js",
      true
    );
  }

  create() {
    this.scene.add("CharacterScene", CharacterScene, true);
    this.scene.start("CharacterScene");
  }

  update() {}
}
