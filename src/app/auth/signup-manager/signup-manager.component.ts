import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-signup-manager',
  templateUrl: './signup-manager.component.html',
  styleUrls: ['./signup-manager.component.scss'],
})
export class SignupManagerComponent  implements OnInit {
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
