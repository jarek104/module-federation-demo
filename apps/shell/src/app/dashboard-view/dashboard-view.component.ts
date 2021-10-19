import { Component } from '@angular/core';
import { ShellAuthService } from '@mfd/shell-services';

@Component({
  selector: 'mfd-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {
  constructor(public auth: ShellAuthService) {
    console.log(auth.token);
  }

  doStuff() {
    this.auth.token = this.auth.token + 1;
  }


}
