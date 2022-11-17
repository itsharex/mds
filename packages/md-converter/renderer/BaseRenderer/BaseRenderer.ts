import { Renderer } from "marked";
import { Theme } from "../../themes";

export class BaseRenderer {
  theme: Theme;

  constructor({ theme }: { theme: Theme }) {
    this.theme = theme;
  }

  setTheme(theme: Theme) {
    this.theme = theme;
  }

  assemble(): Partial<Renderer> {
    throw new Error("assemble function is not implement!");
  }
}
