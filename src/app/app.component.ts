import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DBSNG';
  isLoading = false;
  constructor(
    private commonService: CommonService
  ){}
  ngOnInit() {
    this.commonService.showLoader.subscribe(data => {
      this.isLoading = data;
    })
  }
  createUser(){
    this.commonService.openUserModal({type:"add"});
  }
}
