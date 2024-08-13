import { Component } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examples';
}
