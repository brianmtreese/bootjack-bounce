import { animate, state, style, transition, trigger } from '@angular/animations';
import { defaultDuration } from '../shared/globals';

export const btjSlideState = trigger('btjSlideState', [
    state('false',
        style({ 
            opacity: '{{ startOpacity }}',
            scale: '{{ startScale }}',
            translate: '{{ startX }} {{ startY }}' 
        }), { 
            params: {
                startOpacity: 1,
                startScale: 1,
                startX: '-100%',
                startY: '0' 
            }
        }
    ),
    state('true',
        style({ 
            opacity: 1,
            scale: 1,
            translate: '0 0'
        })
    ),
    transition('false <=> true',
        animate('{{ duration }} ease-in-out'),
        { params: { duration: defaultDuration }}
    )
]);
