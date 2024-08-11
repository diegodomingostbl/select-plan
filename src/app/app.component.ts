import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesModule, SharedComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'select-plan';
}
