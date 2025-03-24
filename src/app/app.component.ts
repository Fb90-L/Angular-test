import { Component } from '@angular/core';
import { AppService } from './app.service';
import { TestService } from './shared/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-14-seed';
  constructor(private _service:AppService, private _test: TestService){

  }
}
