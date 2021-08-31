import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { MODAL_USER, USER } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = environment.api_url;
  public userSubject:Subject<any> = new Subject();
  public showLoader:Subject<any> = new Subject();
  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { 
    console.log(environment,'+++');
  }

  getUsers():Observable<any> {
    return this.http.get(`${this.apiUrl}/users`)
  }
  addUser(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/users`, data)
  }
  updateUser(data:any):Observable<any>{
    return this.http.patch(`${this.apiUrl}/users`, data)
  }

  openUserModal(data:MODAL_USER) {
    const modalRef = this.modalService.open(AddUserComponent, {
      backdrop: 'static',
      keyboard: false,
  });
    modalRef.componentInstance.data = data;
    modalRef.result.then(data => {
      if(data) {
        this.userSubject.next(data);
      }
    }, error => {

    })
  }
}
