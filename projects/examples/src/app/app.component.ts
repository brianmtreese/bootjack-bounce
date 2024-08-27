import { Component } from '@angular/core';
import { SlideAnimationComponent } from './slide-animation/slide-animation.component';
import { FlipAnimationComponent } from './flip-animation/flip-animation.component';
import { CrossFadeAnimationComponent } from './cross-fade-animation/cross-fade-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SlideAnimationComponent,
    FlipAnimationComponent,
    CrossFadeAnimationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examples';
}
