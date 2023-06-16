/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable max-len */
class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "boot",
    });
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
    this.scene.add("example", Demo, true);
    this.scene.start("example");
  }
}
class Demo extends Phaser.Scene {
  constructor() {
    super({
      key: "examples",
    });
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

    this.input.on("pointermove", function (pointer) {
      const x = pointer.worldX;
      const y = pointer.worldY;
      character0.lookAt(x, y);
      character1.lookAt(x, y);
    });

    this.add.text(0, 1050, "Click body to change model", { fontSize: 24 });
  }

  update() {}
}

var CreateCharacter = function (scene, x, y, key) {
  var character = scene.add
    .rexLive2d(x, y, key, {
      autoPlayIdleMotion: "Idle",
    })
    .setScale(0.2)
    .setInteractive()
    .on("pointerdown-Body", function () {
      const key = character.key === "Haru" ? "Hiyori" : "Haru";
      character.setModel(key);
    });

  return character;
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: Boot,
};

const game = new Phaser.Game(config);
