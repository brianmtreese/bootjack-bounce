import { Component, signal } from "@angular/core";
import { btjSlideEnterLeave, btjSlideState } from "../../../../ngx-bootjack-bounce/src/public-api";

@Component({
  selector: 'app-animation',
  standalone: true,
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss',
  animations: [
    btjSlideState,
    btjSlideEnterLeave
  ]
})
export class AnimationComponent {
  protected visible = signal(false);
}
