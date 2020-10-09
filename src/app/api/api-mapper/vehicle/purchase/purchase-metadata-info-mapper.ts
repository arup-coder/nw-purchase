import {JsonObject, JsonProperty} from 'json2typescript';
import {LocationMapper} from './location-mapper';
import {IPurchaseInfoMetaData} from './purchase-info-metadata.model';
import {SalesChannel} from 'src/app/shared/enums/enum';


@JsonObject('OnlinePurchaseMetadataMapper')
export class PurchaseMetadataInfoMapper implements IPurchaseInfoMetaData {
    @JsonProperty('$type', String, true)
    public type: string = undefined;

    @JsonProperty('location', LocationMapper, true)
    public location: LocationMapper = undefined;

    @JsonProperty('runNumber', String, true)
    public runNumber = '';

    @JsonProperty('laneNumber', String, true)
    public laneNumber = '';

    @JsonProperty('companyId', String, true)
    public companyId = '';

    @JsonProperty('salesChannel', String, true)
    public salesChannel: SalesChannel = undefined;
}
