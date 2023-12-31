import { AsfAbstractComponent } from "../../asf-core/asf-abstract-component.js";

export class AsfIconComponent extends AsfAbstractComponent {
  static id = "asf-icon";
  static observedAttributes = ["name", "size"];

  styleURLs() {
    return ["asf-icon/asf-icon.component.css"];
  }

  render() {
    const url = this._getUrl();
    return `
      <span class="icon ${this.resources.size ?? ""}">
        <img src="${url}" />
      </span>
    `;
  }

  _getUrl() {
    return `lib/asf-components/asf-icon/assets/${this.resources.name}.svg`;
  }
}
