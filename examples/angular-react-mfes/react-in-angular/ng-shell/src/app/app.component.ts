import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {init, loadRemote} from '@module-federation/enhanced/runtime';

init({
  name: '@module-federation-examples/wc-ng-shell',
  remotes: [
    {
      name: 'wc_react_remote',
      entry: 'http://localhost:4201/remoteEntry.js',
    },
  ],
});
loadRemote('wc_react_remote/Module');

@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wc-ng-shell';
}
