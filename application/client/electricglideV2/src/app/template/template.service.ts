import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private sharedService: SharedService,
    private http: HttpClient) { }

    GpSearch(player:any): Observable<any> {
      const temp:any = [];
      const objectKeyPair = Object.entries(player);
      objectKeyPair.forEach((element, index) => {
        if (element[1]) {
          temp.push(`${element[0]}=${element[1]}`);
        }
      });
      return this.http.get(this.sharedService.DESKTOP_API + `/player/get/search?${temp.length > 0 ? `${temp.join('&')}` : ''}`);
    }

  GpGetAllUsers(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/getallusers');
  }

  GpUpdateUsers(payload:any): Observable<any> {
    return this.http.put(this.sharedService.DESKTOP_API + '/updateuser', payload);
  }

}
