import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMethodsService } from 'src/app/services/api-methods.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css','../user-list/user-list.component.css']
})
export class UserProfileComponent implements OnInit {

  id;
  constructor( private apiMethod : ApiMethodsService) {
    this.id = localStorage.getItem('userProfileId')
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  public userProfile;
  public getUserProfile() {
    var url = 'https://reqres.in/api/users/' + this.id
    this.apiMethod.getWt(url).subscribe(
      data => {
        this.userProfile = data;
      },
      error=>{}
    )
  }
}
