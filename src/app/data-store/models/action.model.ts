import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {IFilterStateKeys} from './filter.model';

export interface IAction {
    type: ActionsConstant;
    subType?: ActionsConstant;
    data: any;
    subtype?;
    currentAppState: string;
}
