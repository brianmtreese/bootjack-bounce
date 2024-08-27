import { Component } from "@angular/core";
import { btjCrossfadeEnterLeave, btjCrossfadeState } from "../../../../ngx-bootjack-bounce/src/lib/cross-fade/cross-fade.animation";

@Component({
    selector: 'app-cross-fade-animation',
    standalone: true,
    templateUrl: './cross-fade-animation.component.html',
    styleUrl: './cross-fade-animation.component.scss',
    animations: [
        // btjCrossfadeState()
        // btjCrossfadeState(true)
        btjCrossfadeEnterLeave()
    ]
})
export class CrossFadeAnimationComponent {
    protected step: 1 | 2 = 1;
}
