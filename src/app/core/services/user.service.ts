import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Login } from "../models/login.model";
import { HttpClient } from "@angular/common/http";
import { BaseResponse } from "../interfaces/base-response.interface";
import { LoginResponse } from "../interfaces/login-response.interface";
import { PassengerSignUp } from "../models/passenger-signup.model";
import { DriverSignUp } from "../models/driver-signup.model";
import { ManagerSignUp } from "../models/manager-signup.model";

@Injectable({ providedIn: 'root'})
export class UserService {
    baseUrl = environment.baseUrl + "User";
    constructor(private client: HttpClient) {}

    login(request: Login) {
        return this.client.post<BaseResponse<LoginResponse>>(`${this.baseUrl}/Login`, request);
    }

    passengerSignUp(request: PassengerSignUp) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/passengerSignUp`, request);
    }

    driverSignUp(request: DriverSignUp) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/driverSignUp`, request);
    }

    managerSignUp(request: ManagerSignUp) {
        return this.client.post<BaseResponse<boolean>>(`${this.baseUrl}/managerSignUp`, request);
    }


}