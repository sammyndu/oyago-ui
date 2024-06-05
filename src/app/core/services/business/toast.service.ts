import { Injectable } from "@angular/core";
import { Toast } from "@capacitor/toast";
import { from, of } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ToastService {

    constructor() {}

    showToast(message: string) {
        return from(Toast.show({
            text: 'Hello!',
          }));
    }
}