class AsfHeaderComponent extends AsfAbstractComponent {

  static id = "asf-header";

  styleURLs() {
    return [
      '../asf-styles/common.css',
      'asf-header/asf-header.component.css'
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
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
            <ul class="menu">
                <li></li>
            </ul>
        </nav>
    </header>    
    `;
  }
}

customElements.define(AsfHeaderComponent.id, AsfHeaderComponent);
