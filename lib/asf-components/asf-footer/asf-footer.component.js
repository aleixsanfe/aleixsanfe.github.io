import { AsfAbstractComponent } from "../../asf-core/asf-abstract-component.js";

export class AsfFooterComponent extends AsfAbstractComponent {
  static id = "asf-footer";

  styleURLs() {
    return [
      "../asf-styles/colors.css",
      "../asf-styles/common.css",
      "asf-footer/asf-footer.component.css",
    ];
  }

  render() {
    const currentYear = new Date().getFullYear();

    return `
      <footer>
        <ul>
          <li>
            <a href="https://github.com/aleixsanfe" target="_blank">
              <asf-icon name="github" size="large"></asf-icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aleix_sanfe" target="_blank">
            <asf-icon name="twitter" size="large"></asf-icon>
            </a>
          </li>
          </li>
          <li>&copy; ${currentYear}</li>
        </ul>
      </footer>
    `;
  }
}
