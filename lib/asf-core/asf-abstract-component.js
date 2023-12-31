class AsfAbstractComponent extends HTMLElement {
  constructor() {
    super();
		this._init();
  }

  styleURLs() {
    return [];
  }

  render() {
    return '';
  }

	_init() {
		const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = this.render();
    this._insertStyles(shadow);
	}

  _insertStyles(shadow) {
		const base = './lib/asf-components';

    const styleURLs = this.styleURLs();
    for (const url of styleURLs) {
      const style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("href", `${base}/${url}`);

      shadow.appendChild(style);
    }
  }
}
