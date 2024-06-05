import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ShareRoute } from "../interfaces/share-route.model";
import { BaseResponse } from "../interfaces/base-response.interface";
import { AddRouteShareRequest } from "../models/add-route-share-request.model";
import { TapInPassengerRequest } from "../models/tapInPassengerRequest.model";

@Injectable({ providedIn: 'root'})
export class ShareRouteService {

    baseUrl = environment.baseUrl + "RouteShare";
    constructor(private client: HttpClient) {

    }

    getRouteById(id: number) {
        return this.client.get<BaseResponse<ShareRoute>>(`${this.baseUrl}/routeshare/${id}`)
    }

    getRoutesByUsername(username: string) {
        return this.client.get<BaseResponse<ShareRoute[]>>(`${this.baseUrl}/routeshare/${username}`)
    }

    addRouteShareRequest(request: AddRouteShareRequest) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/addrouteshare`, request);
    }

    tapInPassenger(shareRouteId: number, request: TapInPassengerRequest) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/TapinPassenger/${shareRouteId}`, request);
    }

    removePassenger(shareRouteId: number, username: string) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/RemovePassenger/${shareRouteId}?username=${username}`, {});
    }



}