import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatescreenService } from '../createscreen/createscreen.service';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  players_id:any;
  getAllTags:any;
  tag_name:any=[];
  cat_item:any=[];
  cat_item_name:any=[];
  Motor_type_item_name:any=[];
  Brand_item_name:any=[];
  Suspension_item_name:any=[];
  Brakes_item_name:any=[];
  Year_item_name:any=[];
  Motor_item_name:any=[];
  Frame_item_name:any=[];
  Form_Values:FormGroup=new FormGroup({});
  constructor(private formBuilder: FormBuilder,private createservice:CreatescreenService,private searchservice:CatalogService,private activatedRoute:ActivatedRoute,private router:Router) { }
  Search_value_array:any=[];
  ngOnInit(): void {

    this.Form_Values = this.formBuilder.group({
      players_name: ['', Validators.required],
     players_price: ['', Validators.required],
     Motor_torque: ['', Validators.required],
     Battery_capasity: ['', Validators.required],
     distance: ['', Validators.required],
      category:['', Validators.required],
      Motor_types:['', Validators.required],
      brand:['', Validators.required],
      suspension:['', Validators.required],
      brakes:['', Validators.required],
      year:['', Validators.required],
      motor:['', Validators.required],
      frame:['', Validators.required],
    });
    this.createservice.getTagValues().subscribe(data=>{
      this.getAllTags=data;
       this.getAllTags.forEach((element: any) => {
         this.cat_item=element['itemtag'];
         this.tag_name=element['name'].toLowerCase();
          this.cat_item.filter((data:any)=>{
            if(this.tag_name=='category'){
             this.cat_item_name.push(data.name)
            }
            if(this.tag_name=='motor-types'){
             this.Motor_type_item_name.push(data.name)
            }
            if(this.tag_name=='brand'){
             this.Brand_item_name.push(data.name)
            }
            if(this.tag_name=='suspension'){
             this.Suspension_item_name.push(data.name)
            }
            if(this.tag_name=='brakes'){
             this.Brakes_item_name.push(data.name)
            }
            if(this.tag_name=='frame'){
              this.Frame_item_name.push(data.name)
             }
            if(this.tag_name=='year'){
             this.Year_item_name.push(data.name)
            }
            if(this.tag_name=='motor'){
             this.Motor_item_name.push(data.name)
            }
            
          });
       });
     });
  }
  get form_control() { return this.Form_Values.controls; }
  search(){
    const dataToSave = {
      name: this.Form_Values.value.players_name,
      price: this.Form_Values.value.players_price,
      motor_tark: this.Form_Values.value.Motor_torque,
      battery_capacity: this.Form_Values.value.Battery_capasity,
      distance:this.Form_Values.value.distance ,
      category:this.Form_Values.value.category,
      motor_type:this.Form_Values.value.Motor_types,
      brand:this.Form_Values.value.brand,
      suspension:this.Form_Values.value.suspension,
      brakes:this.Form_Values.value.brakes,
      year:this.Form_Values.value.year,
      motor:this.Form_Values.value.motor,
      frame:this.Form_Values.value.frame,
      // pictures:this.img_array,
      // choosen_filename:this.choosen_filename
    }
    console.log("data to save",dataToSave);
   
      this.searchservice.GpSearch(dataToSave).subscribe(data=>{
        console.log("data searched successfully----->",data);
        this.Search_value_array=data;
        console.log(this.Search_value_array);
      })
}
  seemodel(id: any){
    this.router.navigate(['/seemodel'], 
    {
        queryParams: {
            players_id: id,
        }
    });
  
  }

}
