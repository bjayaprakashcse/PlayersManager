import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatescreenService } from './createscreen.service';
import { SharedService } from 'src/shared/shared.service';


@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss']
})
export class CreatescreenComponent implements OnInit {

  constructor(private createservice:CreatescreenService, private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private router:Router, private sharedService: SharedService) { }

  category_tagArray:any=[];
  defaultElevation = 2;
  raisedElevation = 8;
  selectedFiles:any ; 
  choosed_status:boolean=false;
  upload_status:boolean=false;
  currentFileUpload:any;
  titleSelected:any;
  img_array:any=[];
//   img_array:any=['https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/87ae1e767dd041e48ef4d986954431c8_group_17365.png',
// 'https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/a48b70310f52435482b22855f8817a80_22.png',
// 'https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/d2f071f45a78495c9dec9eebc309bdf7_33.png',
// ];

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
  
update_btn:boolean=false;
players_id:any;
name:any;
address:any;
phone_number:any;
category:any;
player_id: any;

ngOnInit(): void {

  this.activatedRoute.queryParams.subscribe((params: any) => {
   
    
    if (params.players_id !== undefined && params.players_id !== null) {
      console.log("params",params);
      this.player_id=params._id;
      this.name=params.name;
      this.address = params.address;
      this.phone_number = params.phone_number;
      this.category = params.category;
    }
  });

    this.Form_Values = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      category: ['', Validators.required],
     
    });
    
  }
  get form_control() { return this.Form_Values.controls; }
  url:any;
  selectedIndex = 0; 
  choosen_filename:any;
  btnStyle = 'btn-default';
  select(title:any) {
    this.titleSelected = title;
  }


  onFileSelected(event:any) {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles){
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.choosed_status=true;
      }
      this.upload_status=true;
    }
  }
  getItems(data: any){
     console.log("Selected Default image",data.toElement.currentSrc);
     this.choosen_filename=data.toElement.currentSrc;
     alert('Your Selected default image is'+ this.choosen_filename)
}
  uploadFile() {
    console.log("inside uploadFile fn");
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log("currentFileUpload",this.currentFileUpload);
    this.gepfileToUpload(this.currentFileUpload);
}
//gepfilemanager
public resultId: any;
gepfileToUpload(fileToUpload: File){
    const endpoint = this.createservice.uploadImgFile();
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    console.log('fileToUpload +++', formData);
    fetch(endpoint, {
        method: 'POST',
        body: formData
    }).then( res => res.json()
    
    ).then((resultData) => {
      console.log("resp",`${this.sharedService.GEPFILE_API}/${resultData}`);
      let dynamic_Ipdata = `${this.sharedService.GEPFILE_API}/${resultData}`;
      this.img_array.push(dynamic_Ipdata);
      
    })
}


onChange(val:any) {
 console.log("val",val);
 
}
 create(){

      if (this.Form_Values.invalid) {
        alert("All Fields are required");
      return;
    }
    if(this.choosen_filename==null || this.choosen_filename==""){
      alert("please select default image")
    }
    else{
      const dataToSave = {
        name: this.Form_Values.value.name,
        address: this.Form_Values.value.address,
        phone_number: this.Form_Values.value.phone_number,
        category: this.Form_Values.value.category,
        distance:this.Form_Values.value.distance ,
        pictures:this.img_array,
        choosen_img:this.choosen_filename
      }
      console.log("data to save",dataToSave);
      if(this.update_btn == true){
        this.createservice.Gpupdate(dataToSave).subscribe((data: any)=>{
          console.log("data updated successfully----->",data);
        })
      }
      this.createservice.Gpcreate(dataToSave).subscribe((data: any)=>{
        console.log("data saved------->",data);
        this.router.navigate(['/catalog']);
      },
      (error: any)=>{
        console.log("Data creation error",error);
        
      })
    }
  }
  update(){

  //   if (this.Form_Values.invalid) {
  //     alert("All Fields are required");
  //   return;
  // }
  if(this.choosen_filename==null || this.choosen_filename==""){
    alert("please select default image")
  }

  else{
    const dataToSave = {
      _id:this.players_id,
      name: this.Form_Values.value.name,
      address: this.Form_Values.value.address,
        phone_number: this.Form_Values.value.phone_number,
        category: this.Form_Values.value.category,
        distance:this.Form_Values.value.distance ,
        pictures:this.img_array,
        choosen_img:this.choosen_filename
    }
    console.log("data to save",dataToSave);
   
      this.createservice.Gpupdate(dataToSave).subscribe((data: any)=>{
        this.router.navigate(['/catalog']);
        console.log("data updated successfully----->",data);
      })
   
  }
}
}
