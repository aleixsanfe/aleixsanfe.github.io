import { AsfAbstractComponent } from "../../asf-core/public.api.js";

export class AsfHeaderComponent extends AsfAbstractComponent {
  static id = "asf-header";

  styleURLs() {
    return [
      "../asf-styles/colors.css",
      "../asf-styles/common.css",
      "asf-header/asf-header.component.css",
    ];
  }

  render() {
    return `
    <header>
      <nav>
        <ul class="home">
          <li>
            <a href="/">Aleix Sanfe</a>
          </li>
        </ul>
        <ul class="index"></ul>
        <ul class="menu">
          <li></li>
        </ul>
      </nav>
    </header>    
    `;
  }
}
