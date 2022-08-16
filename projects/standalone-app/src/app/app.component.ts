import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngrx-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    Welcome {{ title }}

    <a routerLink="/feature">Load Feature</a>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ngrx-standalone-app';
}
