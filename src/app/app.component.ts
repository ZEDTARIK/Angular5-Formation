import { Component } from '@angular/core';
import {
  Router, Event, NavigationStart, NavigationEnd,
  NavigationError, NavigationCancel
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formation Angular 5';
  showLoadingIndicator = true;

  constructor(private _router: Router) {
    
    this._router.events.subscribe((routerEvent: Event) => {
      // On NavigationStart, set showLoadingIndicator to true
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }

    });
  }

}
