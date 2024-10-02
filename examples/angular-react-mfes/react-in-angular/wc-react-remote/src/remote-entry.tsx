import { App } from './app/app';
import {createRoot} from "react-dom/client";

class ReactMFE extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const root = createRoot(mountPoint);
    root.render(<App />);
  }
}
customElements.define('react-mfe', ReactMFE);
