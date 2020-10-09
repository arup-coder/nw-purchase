import {JsonObject, JsonProperty} from 'json2typescript';
import {IPurchasesData} from 'src/app/data-store/models/vehicle.model';
import {LineItemMapper} from '../lineitem-group/lineitem-mapper';
import {PurchaseMetadataInfoMapper} from './purchase-metadata-info-mapper';

@JsonObject('PurchaseMapper')
export class PurchaseMapper implements IPurchasesData {
    @JsonProperty('metadata', PurchaseMetadataInfoMapper, true)
    public metadata: PurchaseMetadataInfoMapper = undefined;

    private _amount: string | number = undefined;
    get amount(): string | number {
      return this._amount;
    }
    set amount(value: number | string) {
      this._amount = value;
    }

    private _lineItems: LineItemMapper[] = undefined;
    get lineItems(): LineItemMapper[] {
      return this._lineItems;
    }
    set lineItems(value: LineItemMapper[]) {
      this._lineItems = value;
    }
}
