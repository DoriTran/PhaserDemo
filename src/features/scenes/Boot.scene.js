/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.script(
      "live2d",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/live2d/core/live2dcubismcore.min.js"
    );
    this.load.plugin(
      "rexlive2dplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexlive2dplugin.min.js",
      true
    );
  }

  create() {
    this.scene.start("CharacterScene");
  }

  update() {}
}
