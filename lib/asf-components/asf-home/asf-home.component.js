import { AsfAbstractComponent } from "../../asf-core/public.api.js";

export class AsfHomeComponent extends AsfAbstractComponent {
  static id = "asf-home";

  styleURLs() {
    return [
      "../asf-styles/colors.css",
      "../asf-styles/common.css",
      "asf-home/asf-home.component.css",
    ];
  }

  render() {
    return `
    <main>
      <h1>Hello World</h1>
    </main>
    `;
  }
}
