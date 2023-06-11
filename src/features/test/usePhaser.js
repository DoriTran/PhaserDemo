/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { useEffect, useRef } from "react";

import ImageURILoaderPlugin from "phaser3-rex-plugins/plugins/imageuriloader-plugin";

import { BootScene } from "./scenes/Boot.scene";
import { WorldScene } from "./scenes/World.scene";
import { BattleScene } from "./scenes/Battle.scene";
import { UIScene } from "./scenes/UI.scene";

const config = {
  type: Phaser.AUTO,
  parent: "test",
  backgroundColor: "#F8E8EE",
  scale: {
    // mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  zoom: 2,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  plugins: {
    global: [
      {
        key: "rexImageURILoader",
        plugin: ImageURILoaderPlugin,
        start: true,
      },
    ],
  },
  // scene: [BootScene, WorldScene], // Part 1
  scene: [BootScene, BattleScene, UIScene], // Part 2
};

const usePhaser = () => {
  const phaserRef = useRef();

  useEffect(() => {
    // Create the Phaser game instance in the first render of component
    phaserRef.current = new Phaser.Game(config);

    // Cleanup the Phaser game instance when the component unmounts
    return () => {
      phaserRef.current.destroy();
    };
  }, []);

  return phaserRef.current;
};

export default usePhaser;
