import 'zone.js';
import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {RemoteEntryComponent} from "./entry.component";

(async () => {
  const app = await createApplication();
  const angularMfeElement = createCustomElement(RemoteEntryComponent, {injector: app.injector});
  customElements.define("angular-mfe", angularMfeElement);
})();
