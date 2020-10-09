import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('BuyerMapper')
export class BuyerOrOrgMapper {
    @JsonProperty('name', String, true)
    public name = '';

    @JsonProperty('auctionAccessId', String, true)
    public auctionAccessId = '';
}
