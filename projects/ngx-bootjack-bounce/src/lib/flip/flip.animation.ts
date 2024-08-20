import { animate, state, style, transition, trigger } from '@angular/animations';
import { defaultDuration } from '../shared/globals';

export enum BtjFlipDirection {
    Default,
    Reverse
}

export const btjFlipHorizontal = (direction: BtjFlipDirection = BtjFlipDirection.Default) => {
    const directionStyle = direction === BtjFlipDirection.Reverse ? 'rotateY(-180deg)' : 'rotateY(180deg)';
    return trigger('btjFlipHorizontal', [
        state('false', style({ transform: 'none' })),
        state('true', style({ transform: directionStyle })),
        transition('false <=> true',
            animate('{{ duration }} ease-in-out'),
            { params: { duration: '0.8s' }}
        )
    ])
}

export const btjFlipVertical = (direction: BtjFlipDirection = BtjFlipDirection.Default) => {
    const directionStyle = direction === BtjFlipDirection.Reverse ? 'rotateX(-180deg)' : 'rotateX(180deg)';
    return trigger('btjFlipVertical', [
        state('false', style({ transform: 'none' })),
        state('true', style({ transform: directionStyle })),
        transition('false <=> true',
            animate('{{ duration }} ease-in-out'),
            { params: { duration: '0.8s' }}
        )
    ])
}
