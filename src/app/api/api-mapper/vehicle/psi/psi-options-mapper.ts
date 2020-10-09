import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PsiOptionsMapper')
export class PsiOptionsMapper {
    @JsonProperty('price', Number, true)
    public price: number = null;

    @JsonProperty('description', String, true)
    public description: string = undefined;
}
