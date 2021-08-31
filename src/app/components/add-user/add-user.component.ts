import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { USER } from 'src/app/models/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() data:any;
  userForm: FormGroup;
  submitted:boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private commonService:CommonService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });

    if(this.data.type === 'edit'){
      let {name,email,phone,website} = this.data;
      this.userForm.setValue({
        name: name,
        email: email,
        phone: phone,
        website: website
      })
    }
  }

  onSubmitUser(){
    this.submitted = true;
    if(this.userForm.valid){
      let newData = {...this.data, ...this.userForm.value};
      if(newData.type === "add") {
        this.commonService.showLoader.next(true);
        this.commonService.addUser(newData).subscribe((res) => {
          this.commonService.showLoader.next(false);
          this.activeModal.close(newData);
        }, err=> {
          this.commonService.showLoader.next(false);
        })
      } else {
        this.activeModal.close(newData);
      }
    }
  }

}
