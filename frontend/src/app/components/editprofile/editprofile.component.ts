import { Profile } from 'src/app/models/Profile';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import {SharedService} from '../../services/shared.service';
import {DatePipe, Location} from '@angular/common';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  files:any;
  profile:Profile;



  constructor(private authService:AuthServiceService,public sharedService:SharedService,public  datePipe: DatePipe, private location: Location) {
authService.getUserProfile().subscribe(res=>{
  this.profile=res;
  console.log(res);
});

// this.authService.getphoto().subscribe(value => {
//
//
// });



  }


  ngOnInit(): void {
this.profile =new Profile();

  }

  imageup(event){
this.files = event.target.files[0];
 this.uploadphoto();
   // window.location.reload();
  }

  uploadphoto(){
    let formdate = new FormData()
    formdate.append("file",this.files,this.files.name);
    this.authService.uploadphoto(formdate).subscribe(value => {

    });
  }

  updateProfile() {

    this.authService.updateProfile(this.profile).subscribe(result => {
      window.location.reload();
    })
  }
  navigateBack() {
    this.location.back();
  }






}
