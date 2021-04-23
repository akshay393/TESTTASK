import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMethodsService } from 'src/app/services/api-methods.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private apiMethod : ApiMethodsService, private route : Router) { }

  ngOnInit(): void {
    this.getUserList(1);
  }

  public userLists;
  public getUserList(page) {
    var url = 'https://reqres.in/api/users?page=' + page
    this.apiMethod.getWt(url).subscribe(
      data => {
        this.userLists = data
      },
      error=>{}
    )
  }

  public pageChanged(event) {
    this.getUserList(event)
  }

  public userClick(id?) {
    localStorage.setItem('userProfileId',id);
    this.route.navigate(['/home/user-profile'])
  }

}
