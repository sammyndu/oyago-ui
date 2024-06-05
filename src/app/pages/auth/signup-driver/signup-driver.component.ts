import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-signup-driver',
  templateUrl: './signup-driver.component.html',
  styleUrls: ['./signup-driver.component.scss'],
})
export class SignupDriverComponent  implements OnInit {

  file!:File
  fileString!:string

  constructor() { }

  ngOnInit() {}

  onUpload(event: any) {
    this.file = event.target.files[0];
    
  }

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
