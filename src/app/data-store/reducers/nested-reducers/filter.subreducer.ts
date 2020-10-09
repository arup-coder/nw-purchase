import {IAction} from '../../models/action.model';
import {Immutable} from '../../immutable';
import {IFilterState} from '../../models/filter.model';

export function filterReducer(initialState: IFilterState, action: IAction) {
  switch (action.subtype) {
    default:
      return Immutable.setIn(initialState, action.subtype, action.data);
  }
}
