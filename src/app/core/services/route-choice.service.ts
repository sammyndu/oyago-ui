import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseResponse } from "../interfaces/base-response.interface";
import { OrcValidation } from "../interfaces/orc-validation-response.interface";
import { AddRouteChoice } from "../models/add-route-choice.model";

@Injectable({ providedIn: 'root'})
export class RouteChoiceService {
    baseUrl = environment.baseUrl + "RouteChoice";
    constructor(private client: HttpClient) {}

    validateORC(orc: string) {
        return this.client.get<BaseResponse<OrcValidation>>(`${this.baseUrl}/validateorc/${orc}`);
    }

    addRouteChoice(request: AddRouteChoice) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/addroutechoice`, request);
    }
}