import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-signup-passenger',
  templateUrl: './signup-passenger.component.html',
  styleUrls: ['./signup-passenger.component.scss'],
})
export class SignupPassengerComponent  implements OnInit {
  fileString!: string;

  constructor() { }

  ngOnInit() {}

  public async addImage() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    this.fileString =  capturedPhoto.dataUrl ?? "";
  }


}
