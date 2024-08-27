import { animate, AnimationMetadata, group, query, style, transition, trigger } from "@angular/animations";
import { defaultDuration } from "../shared/globals";

const hidden = style({ opacity: 0, scale: '{{ scale }}' });
const visible = style({ opacity: 1, scale: 1 });

const animationBase = (triggerName: string, 
                       visibleToken: string, 
                       hiddenToken: string, 
                       groupFadeEvents = false) => {
    const queries: AnimationMetadata[] = [
        query(visibleToken, [hidden], { optional: true }),
        query(hiddenToken, [
            animate('{{ duration }} ease-out', hidden)
        ], { optional: true }),
        query(visibleToken, [
            animate('{{ duration }} ease-in', visible)
        ], { optional: true })
    ];
    const animations = () => {
        if (groupFadeEvents) {
            return group(queries);
        }
        return queries;
    }

    return trigger(triggerName, [
        transition('* <=> *', animations(), { 
            params: {
                duration: defaultDuration,
                scale: 0.7
            }
        })
    ]);
}

export const btjCrossfadeState = (groupFadeEvents = false) => {
    return animationBase('btjCrossfadeState', '.active', ':not(.active)', groupFadeEvents);
};

export const btjCrossfadeEnterLeave = (groupFadeEvents = false) => {
    return animationBase('btjCrossfadeEnterLeave', ':enter', ':leave', groupFadeEvents);
}
