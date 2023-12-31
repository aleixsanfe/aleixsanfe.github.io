class AsfFooterComponent extends AsfAbstractComponent {
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
            <a href="/"> &lt; </a>
          </li>
          <li>
            <ul>
              <li class="icon github">
                <a href="https://github.com/aleixsanfe" target="_blank"></a>
              </li>
              <li class="icon twitter">
                <a href="https://twitter.com/aleix_sanfe" target="_blank"></a>
              </li>
            </ul>
          </li>
          <li>&copy; ${currentYear}</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define(AsfFooterComponent.id, AsfFooterComponent);
