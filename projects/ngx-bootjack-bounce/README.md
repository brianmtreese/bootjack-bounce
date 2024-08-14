# Bootjack Bounce
This is a collection of common UI animations for modern Angular applications.

Currenlty there's not much here, but I plan to add a lot more in the future. My goal is to keep this library slim and only add animations that are common UI interactions. They are intended for use with things like menu panels, modals, view transitions and other similar patterns that you're likely to run into in your day to day work. 

If you'd like to request an animation, please do!

## Installation
```bash
npm i ngx-bootjack-bounce
```

## Usage
Before you can use the animations in this library, you'll need to enable the animations module in your application. Learn how to do this [here](https://angular.dev/guide/animations#enabling-the-animations-module).

After every thing is installed, the animations in this library can be used either as [state-based](https://youtu.be/CGBcIz1tYec) or [enter/leave animations](https://youtu.be/tDXkcITKDDY).

### State-based Animation Usage
If the elements you're animating are always included within the DOM, you'll want to use a state-based animation. 

Let's use a "slide" animation for an example. In order to use this animation you'll need to import the btjSlideState animation and include it the animations array for your component. You'll also need a boolean property to trigger the "true" and "false" states. 

#### component.ts
```typescript
import { btjSlideState } from 'ngx-bootjack-bounce';

@Component({
    ...
    animations: [
        btjSlideState
    ]
})
export class Component {
    protected isVisible = signal(false);
}
```

#### component.html
```html
<div [@btjSlideState]="visible()">
    ...
</div>
<button (click)="isVisible.set(!isVisible())">Animate</button>
```

By default the animation will slide in from the left. If you want to change this, you can use [animation params](https://youtu.be/ZNZ1JvrUdhE).

So to flip and animate in from the right, you can provide a "startX" param. This will be the X translation value when the animation starts.

#### component.html
```html
<div [@btjSlideState]="{
        value: visible(),
        params {
            startX: 100%
        }
    }">
    ...
</div>
```

If you want to slide in a vertical direction, you can provide a "startY" param. This will be the Y translation value when the animation starts.

#### component.html
```html
<div [@btjSlideState]="{
        value: visible(),
        params {
            startY: -100%
        }
    }">
    ...
</div>
```

Additionally, you can set the starting opacity and scale.

#### component.html
```html
<div [@btjSlideState]="{
        value: visible(),
        params {
            startY: -100%,
            startOpacity: 0,
            startScale: 0.7
        }
    }">
    ...
</div>
```

### Enter/Leave Animation Usage
If the elements you're animating are conditionally added or removed from the DOM, you'll want to use the enter/leave version of the animation. 

Again let's use a "slide" animation to demonstrate. In order to use this animation you'll need to import the btjSlideEnterLeave animation and include it the animations array for your component.

#### component.ts
```typescript
import { btjSlideEnterLeave } from 'ngx-bootjack-bounce';

@Component({
    ...
    animations: [
        btjSlideEnterLeave
    ]
})
export class Component {
    protected isVisible = signal(false);
}
```

#### component.html
```html
@if (visible()) {
    <div @btjSlideEnterLeave>
        ...
    </div>
}
<button (click)="visible.set(!visible())">{{ visible() ? 'Hide' : 'Show' }}</button>
```

By default the animation will slide in from the left. If you want to change this, you can use [animation params](https://youtu.be/ZNZ1JvrUdhE).

The available params are:
* startX
* startY
* startScale
* startOpacity

And you can see how to use them above.

## Customizing the Animation Duration

If you don't like the default duration for the animation, you can add your own with [animation params](https://youtu.be/ZNZ1JvrUdhE) using the "duration" param.

#### component.html
```html
<div [@btjSlideState]="{
        value: visible(),
        params {
            duration: '3s'
        }
    }">
    ...
</div>