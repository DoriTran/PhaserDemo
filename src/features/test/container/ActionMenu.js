import { Menu } from "./Menu";

export class ActionsMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.addMenuItem("Attack");
  }

  confirm() {
    this.scene.events.emit("SelectEnemies");
  }
}
