import { animate, state, style, transition, trigger } from '@angular/animations';

export const btjSlideIn = trigger('btjSlideIn', [
    state('false',
        style({ translate: '{{ start }}' }),
        { params: { start: '-100%' } }
    ),
    state('true', 
        style({ translate: 0 })
    ),
    transition('false <=> true',
        animate('ease-in-out'),
        { params: { duration: '0.15s' }}
    )
]);
