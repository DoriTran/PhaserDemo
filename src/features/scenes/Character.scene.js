/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import Phaser from "phaser";

// import MadokaMagical from "assets/model/200100/model.model3.json";
// import MadokaStudent from "assets/model/200101/model.model3.json";

const CreateCharacter = (scene, x, y, key) => {
  const character = scene.add
    .rexLive2d(x, y, key, {
      autoPlayIdleMotion: "Idle",
    })
    .setScale(0.2)
    .setInteractive()
    .on("pointerdown-Body", () => {
      const charKey = character.key === "Haru" ? "Hiyori" : "Haru";
      character.setModel(charKey);
    });

  return character;
};

export class CharacterScene extends Phaser.Scene {
  constructor() {
    super({ key: "CharacterScene" });
  }

  preload() {
    this.load.rexLive2d(
      "Haru",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/live2d/Haru/Haru.model3.json"
    );
    this.load.rexLive2d(
      "Hiyori",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/live2d/Hiyori/Hiyori.model3.json"
    );
  }

  create() {
    const x = this.game.config.width / 2;
    const y = this.game.config.height / 2;

    const character0 = CreateCharacter(this, x - 500, y, "Haru");
    const character1 = CreateCharacter(this, x + 500, y, "Hiyori");

    this.input.on("pointermove", (pointer) => {
      const mouseX = pointer.worldX;
      const mouseY = pointer.worldY;
      character0.lookAt(mouseX, mouseY);
      character1.lookAt(mouseX, mouseY);
    });

    this.add.text(0, 1050, "Click body to change model", { fontSize: 24 });
  }

  update() {}
}
