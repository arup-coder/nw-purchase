import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {InitialAppState, IAppState} from './models/app-state.model';
import {IAction} from './models/action.model';
import {vehiclceReducer} from './reducers/vehicle.reducer';
import {viewReducer} from './reducers/view.reducer';
import {ActionsConstant} from '../abstract-actions/action-constants';
import {Immutable} from './immutable';
import {pluck, distinctUntilChanged, map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() { }

    private readonly stateSubject = new BehaviorSubject<IAppState>(new InitialAppState());
    readonly state$: Observable<InitialAppState> = this.stateSubject.asObservable();
    private readonly currentAction = new BehaviorSubject<string>('');
    readonly currentAction$: Observable<string> = this.currentAction.asObservable();

    get appState(): IAppState {
      return this.stateSubject.getValue();
    }

    set appState(val: IAppState) {
      this.stateSubject.next(val);
    }

    private rootReducer = {
      [ActionsConstant.APP_STATE_VEHICLE]: vehiclceReducer,
      [ActionsConstant.APP_STATE_VIEW]: viewReducer,
    };

    private combineReducer(initialState: IAppState, action: IAction) {
      const state: string = action.currentAppState;
      return this.rootReducer[state](initialState[state], action);
    }

    public updateAppState(action: IAction) {
      this.appState = Immutable.setIn(
          this.appState,
          action.currentAppState,
          this.combineReducer(this.appState, action),
      ) as IAppState;
      this.currentAction.next(action.type);
    }

    public mapProps(...args: string[]): Observable<any> {
      if (!isNullOrUndefined(args) && args.length > 0) {
        return this.state$.pipe(
            pluck.apply(null, args),
            distinctUntilChanged(),
            map((val) => {
              if (args && Array.isArray(args) && args[0] && args[0] === 'view' && args[1] && args[1] === 'filter') {
                return {val, pluckedKeys: args};
              }
              return val;
            }),
        );
      }
    }
}
