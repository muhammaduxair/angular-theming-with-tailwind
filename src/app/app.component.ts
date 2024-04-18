import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tailwind-theming-angular';

  switchTheme(theme: string) {
    const target = document.querySelector('[data-theme]') as HTMLElement;
    target.setAttribute('data-theme', theme);
  }
}
