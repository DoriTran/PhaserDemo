/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// class Boot extends Phaser.Scene {
//   constructor() {
//       super({
//           key: 'boot'
//       })
//   }

//   preload() {
//       this.load.script('live2d', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/live2d/core/live2dcubismcore.min.js');
//       this.load.plugin('rexlive2dplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexlive2dplugin.min.js', true);
//   }

//   create() {
//       this.scene.add('example', Demo, true);
//       this.scene.start('example');
//   }
// }
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

    const character = this.add
      .rexLive2d(x, y, "Haru", {
        // autoPlayIdleMotion: 'TapBody'
      })
      .setScale(0.2);

    // Hit test
    const print = this.add.text(0, 0, "", { fontSize: 36 });
    let anyHit = false;
    character
      .setInteractive()
      .on("pointerdown-Head", function () {
        print.text = "Hit Head\n";
        anyHit = true;
      })
      .on("pointerdown-Body", function () {
        print.text = "Hit Body\n";
        const key = character.key === "Haru" ? "Hiyori" : "Haru";
        character.setModel(key);
        anyHit = true;
      });

    this.input.on("pointerdown", function () {
      if (!anyHit) {
        print.text = "No hit";
      } else {
        anyHit = false;
      }
    });

    // Interactive with touch pointer
    const printDragXY = this.add.text(0, 1080 / 2 + 200, "", { fontSize: 36 });
    this.input.on("pointermove", function (pointer) {
      const x = pointer.worldX;
      const y = pointer.worldY;
      character.lookAt(x, y);

      // Debugging
      const modelXY = character.getModelXY(x, y);
      const dragX = modelXY.x;
      const dragY = modelXY.y;
      printDragXY.text = `${dragX.toFixed(2)}, ${dragY.toFixed(2)}`;
    });
    character.lookForward();

    this.character = character;
    this.debuggerGraphics = this.add.graphics();

    const gui = new dat.GUI();
    gui.add(this.character, "x", 0, 1920);
    gui.add(this.character, "y", 0, 1080);
    gui.add(this.character, "scale", 0.1, 1);
    gui.add(this.character, "angle", -180, 180);
  }

  update() {
    this.debuggerGraphics.clear();

    this.debuggerGraphics
      .lineStyle(2, 0xffff00)
      .strokePoints(
        [
          this.character.getTopLeft(),
          this.character.getTopRight(),
          this.character.getBottomRight(),
          this.character.getBottomLeft(),
        ],
        true,
        true
      );

    this.debuggerGraphics
      .lineStyle(2, 0xff0000)
      .lineBetween(
        this.character.x,
        this.character.y,
        this.character.x + 100 * Math.cos(this.character.rotation),
        this.character.y + 100 * Math.sin(this.character.rotation)
      );
  }
}

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
