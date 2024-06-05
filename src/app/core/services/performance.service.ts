import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseResponse } from "../interfaces/base-response.interface";
import { SetPerformance } from "../models/set-performance.model";

@Injectable({ providedIn: 'root'})
export class PerformanceService {
    baseUrl = environment.baseUrl + "Performance";
    constructor(private client: HttpClient) {}

    getPerformanceRating(username: string, routeType: string) {
        return this.client.get<BaseResponse<Performance>>(`${this.baseUrl}/getperformancerating/${username}?routeType=${routeType}`);
    }

    setPerformanceRating(request: SetPerformance) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/setperformancerating`, request);
    }
}