import { animate, style, transition, trigger } from '@angular/animations';
import { defaultDuration } from '../shared/globals';

export const btjSlideEnterLeave = trigger('btjSlideEnterLeave', [
    transition(':leave', [
        animate(`${defaultDuration} ease-in-out`,
            style({ 
                opacity: '{{ hiddenOpacity }}',
                scale: '{{ hiddenScale }}',
                translate: '{{ hiddenX }} {{ hiddenY }}' 
            })
        )
    ], {
        params: {
            hiddenOpacity: 1,
            hiddenScale: 1,
            hiddenX: '-100%',
            hiddenY: '0' 
        }
    }),
    transition(':enter', [
        style({ 
            opacity: '{{ hiddenOpacity }}',
            scale: '{{ hiddenScale }}',
            translate: '{{ hiddenX }} {{ hiddenY }}' 
        }),
        animate(`${defaultDuration} ease-in-out`,
            style({ 
                opacity: 1,
                scale: 1,
                translate: '0 0' 
            })
        )
    ], {
        params: {
            hiddenOpacity: 1,
            hiddenScale: 1,
            hiddenX: '-100%',
            hiddenY: '0' ,
        }
    })
]);
