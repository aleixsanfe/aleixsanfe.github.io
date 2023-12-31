import { AsfAbstractModule } from "../asf-core/asf-module.js";
import { AsfFooterComponent } from "./asf-footer/asf-footer.component.js";
import { AsfHeaderComponent } from "./asf-header/asf-header.component.js";
import { AsfHomeComponent } from "./asf-home/asf-home.component.js";
import { AsfIconComponent } from "./asf-icon/asf-icon.component.js";

class AsfApplicationModule extends AsfAbstractModule {
  constructor() {
    super([
      AsfFooterComponent,
      AsfHeaderComponent,
      AsfHomeComponent,
      AsfIconComponent,
    ]);
  }
}

export { AsfApplicationModule };
