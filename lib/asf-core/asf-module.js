export class AsfAbstractModule {
  constructor(declarations = []) {
    this._registerDeclarations(declarations);
  }

  _registerDeclarations(declarations) {
    declarations
      .filter((declaration) => !this._isRegistered(declaration))
      .forEach((declaration) => this._registerDeclaration(declaration));
  }

  _isRegistered(declaration) {
    return customElements.get(declaration.id) != null;
  }

  _registerDeclaration(declaration) {
    customElements.define(declaration.id, declaration);
  }
}
