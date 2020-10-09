const isFunction = (fn) => typeof fn === 'function';

export function AutoUnSubscribe({
  blackList = [],
  event = 'ngOnDestroy',
} = {}) {
  return function(constructor: Function) {
    const original = constructor.prototype[event];

    if (!isFunction(original)) {
      throw new Error(`${constructor.name} is using @AutoUnsubscribe but does not implement ${event}`);
    }

    constructor.prototype[event] = function() {
      for (const prop in this) {
        const property = this[prop];
        /* istanbul ignore else */
        if ( !blackList.includes(prop) ) {
          if ( property && ( typeof property.unsubscribe === 'function' ) ) {
            property.unsubscribe();
          } else if ( property && ( typeof property.destroy === 'function' ) ) {
            property.destroy();
          }
        }
      }
      isFunction(original) && original.apply(this, arguments);
    };
  };
}

export function MarkFmp({
  event = 'ngAfterViewInit',
} = {}) {
  return function(constructor: Function) {
    const original = constructor.prototype[event];

    if (!isFunction(original)) {
      throw new Error(`${constructor.name} is using @AutoUnsubscribe but does not implement ${event}`);
    }

    constructor.prototype[event] = function() {
      performance.mark('nw_Purchases');
      isFunction(original) && original.apply(this, arguments);
    };
  };
}
