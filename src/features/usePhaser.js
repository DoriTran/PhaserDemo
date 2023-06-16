import Phaser from "phaser";
import { useEffect, useRef } from "react";
import { BootScene } from "./scenes/Boot.scene";
import { CharacterScene } from "./scenes/Character.scene";

const config = {
  type: Phaser.AUTO,
  parent: "live2d",
  backgroundColor: "#F8E8EE",
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [BootScene, CharacterScene],
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
