class AsfHeaderComponent extends AsfAbstractComponent {
  static id = "asf-header";

  dataService = new AsfDataService();

  links = [];

  onPageConnection() {
    this.dataService
      .get("./data/header-links.json")
      .then((links) => (this.links = links))
      .catch(() => this.links = [])
      .finally(() => this.rerender());
  }

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
            <ul class="index">
              ${this.mapLinks()}
            </ul>
            <ul class="menu">
                <li></li>
            </ul>
        </nav>
    </header>    
    `;
  }

  mapLinks() {
    return this.links.map((link) => `<li>${link.label}</li>`).join("");
  }
}

customElements.define(AsfHeaderComponent.id, AsfHeaderComponent);
