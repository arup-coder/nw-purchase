import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {isNullOrUndefined} from 'util';

@JsonConverter
export class CentsToDollarConverter implements JsonCustomConvert<number> {
  serialize(cents: number): number {
    return cents;
  }

  deserialize(cents: number): number {
    if (!isNullOrUndefined(cents)) {
      return cents/100;
    }
  }
}
