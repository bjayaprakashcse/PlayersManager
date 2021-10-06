import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CreatescreenService {

  constructor(private http: HttpClient,  private sharedService: SharedService) {

   }
   uploadImgFile(){
    
    return `${this.sharedService.GEPFILE_API + '/addAttachment'}`;
   }
   getTagValues(){
    return this.http.get(this.sharedService.DESKTOP_API + '/ItemTags');
   }
   Gpcreate(data:any){
    return this.http.post(this.sharedService.DESKTOP_API + '/player',data);
   }

   Gpupdate(data:any){
     return this.http.put(this.sharedService.DESKTOP_API + '/player',data)
   }
}
