import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
const maxHeight = 250;
const zeroHeight = 0;
const animationDuration = 500;

export const drawerAnimation = [
  trigger('drawerAnimation', [
    transition(':enter', animate(animationDuration, keyframes([
      style({opacity: 0, height: zeroHeight}),
      style({opacity: 1, height: maxHeight}),
    ]))),
    transition(':leave', animate(animationDuration, keyframes([
      style({opacity: 0, height: maxHeight}),
      style({opacity: 1, height: zeroHeight}),
    ]))),
  ]),
];
