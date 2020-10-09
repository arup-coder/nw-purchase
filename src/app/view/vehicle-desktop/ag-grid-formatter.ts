import { TitleStatusUi, PDiStatusUi, ArbitrationStatusUi, PsiStatusUi, TitleStatus, PsiStatus } from './../../shared/enums/enum';
import {isNullOrUndefined} from 'util';
import Utils from 'src/app/shared/utils/utils';

export const titleStatusFormatter = (params: any) => {
  let result = '';
  /* istanbul ignore else */
  if (!isNullOrUndefined(params.data.titleStatus)) {
    const titleDate = params.data.titleStatus.statusDate ? params.data.titleStatus.statusDate : '';
    if ((params.data.titleStatus.status === TitleStatus.NOT_HANDLED) || (params.data.titleStatus.status === TitleStatus.NOT_RECEIVED)) {
      result = `${TitleStatusUi[params.data.titleStatus.status]}`;
    } else {
      result = `${TitleStatusUi[params.data.titleStatus.status]}<br>${titleDate}`;
    }
  }
  return result;
};

// Do not remove used in psi-status component
export const postSaleInspectionFormatter = (params: any) => {
  let result = '';
    /* istanbul ignore else */
  if (!isNullOrUndefined(params.data.psi)) {
    const psiDate = params.data.psi.statusDate ? params.data.psi.statusDate : '';
    const label = PsiStatusUi[params.data.psi.status] ? PsiStatusUi[params.data.psi.status] : PDiStatusUi[params.data.psi.status];
    if (params.data.psi.status === PsiStatus.NOT_ORDERED) {
      result = `${label}`;
    } else {
      result = `${label}<br>${psiDate}`;
    }
  }
  return result;
};

export const currencyFormatter = (data: any) => {
  return Utils.formatNumber(data.value);
};


export const dateComparator = (date1: any, date2: any) => {
  const date1Number = Utils.monthToComparableNumber(date1);
  const date2Number = Utils.monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
};

export const isFirstColumn = (params: any) => {
  const displayedColumns = params.columnApi.getAllDisplayedColumns();
  const thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

export const salesChannelComparator = (salesChannel1: any, salesChannel2: any) => {
  if (!salesChannel1  && !salesChannel2) {
    return 0;
  } else if (!salesChannel1) {
     return -1;
   } else if (!salesChannel2) {
     return 1;
   } else {
     const salesChannel1Upper = salesChannel1.toUpperCase();
     const salesChannel2Upper = salesChannel2.toUpperCase();
     return salesChannel1Upper.localeCompare(salesChannel2Upper);
   }
};

export const headerClass = (params: any) => {
  return `purchases-btn-${params.colDef.field}`;
};
