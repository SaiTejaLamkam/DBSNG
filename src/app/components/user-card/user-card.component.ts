import { Component, Input, OnInit } from '@angular/core';
import { USER } from 'src/app/models/user.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userData: any;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  editUser(event: Event){
    event.preventDefault();
    this.commonService.openUserModal({...this.userData,type:"edit"});
  }

}
