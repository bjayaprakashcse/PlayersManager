import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  playersname:any=[];
  playersprice:any=[];
  images:any=[];
  constructor(private searchservice:SearchService,private router:Router) { }
  ids:any[]=[];
  players_details:any=[];
  ngOnInit(): void {

  }
  getall(){
    this.searchservice.getAllValues().subscribe((data: any)=>{
      console.log("all values-->",data);
      this.players_details=data;
    })
  }
  Edit(id: any) {
    this.router.navigate(['/createscreen'], 
    {
        queryParams: {
            player_id: id._id,
            name: id.name,
            address: id.address,
            phone_number: id.phone_number,
            category: id.category,
            pictures:id.pictures,
            choosen_img:id.choosen_img
            //images: id._id,
        }
    });
}

}


