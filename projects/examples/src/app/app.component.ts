import { Component } from '@angular/core';
import { SlideAnimationComponent } from './slide-animation/slide-animation.component';
import { FlipAnimationComponent } from './flip-animation/flip-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SlideAnimationComponent,
    FlipAnimationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examples';
}
