import { Component, signal } from "@angular/core";
import { btjSlideEnterLeave, btjSlideState } from "../../../../ngx-bootjack-bounce/src/public-api";

@Component({
  selector: 'app-slide-animation',
  standalone: true,
  templateUrl: './slide-animation.component.html',
  styleUrl: './slide-animation.component.scss',
  animations: [
    btjSlideState,
    btjSlideEnterLeave
  ]
})
export class SlideAnimationComponent {
  protected visible = signal(false);
}
