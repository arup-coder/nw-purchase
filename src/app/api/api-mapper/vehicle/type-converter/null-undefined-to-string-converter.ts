import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {isNullOrUndefined} from 'util';


@JsonConverter
export class nullUndefinedToStringConverter implements JsonCustomConvert<string> {
  serialize(data: any): string {
    return data;
  }

  deserialize(data: any): string {
    return isNullOrUndefined(data) ? '' : data;
  }
}
