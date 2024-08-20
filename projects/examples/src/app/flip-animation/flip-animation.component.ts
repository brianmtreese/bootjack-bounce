import { Component, signal } from "@angular/core";
import { BtjFlipDirection, btjFlipHorizontal, btjFlipVertical } from "../../../../ngx-bootjack-bounce/src/lib/flip/flip.animation";

@Component({
  selector: 'app-flip-animation',
  standalone: true,
  templateUrl: './flip-animation.component.html',
  styleUrl: './flip-animation.component.scss',
  animations: [
    // btjFlipHorizontal()
    // btjFlipHorizontal(BtjFlipDirection.Reverse)
    btjFlipVertical()
    // btjFlipVertical(BtjFlipDirection.Reverse)
  ]
})
export class FlipAnimationComponent {
  protected flipped = signal(false);
}
