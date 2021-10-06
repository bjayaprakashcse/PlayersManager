import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient,  private sharedService: SharedService) { }
  search_particular_data(data:any){
     return this.http.get(this.sharedService.DESKTOP_API + '/player/get/search',data);
   }
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
}
