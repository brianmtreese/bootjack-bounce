import { animate, style, transition, trigger } from '@angular/animations';
import { defaultDuration } from '../shared/globals';

export const btjSlideEnterLeave = trigger('btjSlideEnterLeave', [
    transition(':leave', [
        animate('{{ duration }} ease-in-out',
            style({ 
                opacity: '{{ startOpacity }}',
                scale: '{{ startScale }}',
                translate: '{{ startX }} {{ startY }}' 
            })
        )
    ], {
        params: {
            startOpacity: 1,
            startScale: 1,
            startX: '-100%',
            startY: '0',
            duration: defaultDuration
        }
    }),
    transition(':enter', [
        style({ 
            opacity: '{{ startOpacity }}',
            scale: '{{ startScale }}',
            translate: '{{ startX }} {{ startY }}' 
        }),
        animate(`{{ duration }} ease-in-out`,
            style({ 
                opacity: 1,
                scale: 1,
                translate: '0 0' 
            })
        )
    ], {
        params: {
            startOpacity: 1,
            startScale: 1,
            startX: '-100%',
            startY: '0' ,
            duration: defaultDuration
        }
    })
]);
