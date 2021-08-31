import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList:any = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.commonService.userSubject.subscribe(data => {
      if(data) {
        if(data.type === "edit") {
          let pos = this.usersList.findIndex((ele:any) => ele.id === data.id);
          if(pos !== -1) {
            this.usersList[pos] = data;
          }
        } else{
          this.usersList.unshift(data);
        }
       
      }
    })
  }

  getUsersList(){
    this.commonService.showLoader.next(true);
    this.commonService.getUsers().subscribe((res) => {
      this.commonService.showLoader.next(false);
      this.usersList = res;
    }, err=> {
      this.commonService.showLoader.next(false);
    })
  }

}
