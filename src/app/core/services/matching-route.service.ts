import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseResponse } from "../interfaces/base-response.interface";
import { MatchingRoute } from "../interfaces/matching-route.interface";
import { AddMatchingRoute } from "../models/add-matching-route.model";

@Injectable({ providedIn: 'root'})
export class MatchingRouteService {

    baseUrl = environment.baseUrl + "MatchingRoute"

    constructor(private client: HttpClient) {}

    getMatchingRoutes(username: string) {
        return this.client.get<BaseResponse<MatchingRoute[]>>(`${this.baseUrl}/getmatchingroutes`);
    }

    getMatchingRoute(id: number) {
        return this.client.get<BaseResponse<MatchingRoute>>(`${this.baseUrl}/getmatchingroute`);
    }

    addMatchingRoute(request: AddMatchingRoute) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/addmatchingroute`, request);
    }


}