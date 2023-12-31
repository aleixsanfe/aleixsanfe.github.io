class AsfAbstractComponent extends HTMLElement {

  resources = {};

  _shadow;

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

  onPageConnection() {}

  onPageDisconnection() {}

  setResources() {}

  connectedCallback() {
    this.onPageConnection();
    this._render();
  }

  disconnectedCallback() {
    this.onPageDisconnection();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.resources[name] = newValue;
    this.setResources();
    this._render();
  }

  rerender() {
    this._render();
  }

	_init() {
		this._shadow = this.attachShadow({ mode: "closed" });
	}

  _render() {
    this._shadow.innerHTML = this.render();
    this._insertStyles();
  }

  _insertStyles() {
		const base = './lib/asf-components';

    const styleURLs = this.styleURLs();
    for (const url of styleURLs) {
      const style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("href", `${base}/${url}`);

      this._shadow.appendChild(style);
    }
  }
}
