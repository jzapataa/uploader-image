import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [PhotoService]
})
export class PhotoComponent implements OnInit {

  public status: string;
  public message;
  filesToUpload: Array<File>;


  constructor(
    private _photoService: PhotoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._photoService.makeFileRequest(Global.url+"upload", [], this.filesToUpload, 'file').then((result:any) =>{
      this.status = 'success';
      console.log(result);
      form.reset();
    },
    error =>{
      this.status = 'error';
      this.message = error;
    }
     

    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

