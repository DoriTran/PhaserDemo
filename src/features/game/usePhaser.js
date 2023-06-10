import Phaser from "phaser";
import { useEffect, useRef } from "react";

const config = {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#F8E8EE",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [],
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
