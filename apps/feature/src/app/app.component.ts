import { Component } from '@angular/core';
import { ShellAuthService } from '@mfd/shell-services';

@Component({
  selector: 'feat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public auth: ShellAuthService) {
    console.log(auth.token);
  }

  doStuff() {
    this.auth.token = this.auth.token + 1;
  }
}
