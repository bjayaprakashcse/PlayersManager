import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,  private sharedService: SharedService) { }
  getAllValues(){
    return this.http.get(this.sharedService.DESKTOP_API + '/player');
   }
}
