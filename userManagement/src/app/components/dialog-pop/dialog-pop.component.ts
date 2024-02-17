import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Roles, Userinfo } from 'src/app/store/Model/user.model';
import { getUserbycode, getallroles } from 'src/app/store/User/User.Selector';
import { getroles, getuserbycode, updateuserrole } from 'src/app/store/User/User.action';

@Component({
  selector: 'app-dialog-pop',
  templateUrl: './dialog-pop.component.html',
  styleUrls: ['./dialog-pop.component.scss']
})
export class DialogPopComponent {

  rolelist!: Roles[]
  userinfo!: Userinfo;

  constructor(
    private builder: FormBuilder, 
    private store: Store, 
    private ref: MatDialogRef<DialogPopComponent>,@Inject(MAT_DIALOG_DATA) public data: any
  ){

  }

  ngOnInit(): void {
    this.store.dispatch(getroles())
    this.store.select(getallroles).subscribe(item => {
      this.rolelist = item;
    })
    if (this.data != null) {
      this.store.dispatch(getuserbycode({ username: this.data.code }))
      this.store.select(getUserbycode).subscribe(item => {
        this.userinfo = item;
        this.roleform.setValue({
          username: this.userinfo.username,
          role: this.userinfo.role,
          id: this.userinfo.id
        })
      })
    }
  }

  roleform = this.builder.group({
    id: this.builder.control(0),
    username: this.builder.control({ value: '', disabled: true }),
    role: this.builder.control('', Validators.required)
  });

  Saveuserrole() {
    if (this.roleform.valid) {
       this.store.dispatch(updateuserrole({userrole:this.roleform.value.role as string,
        userid:this.roleform.value.id as number}))
        this.closepopup();
    }
  }

  closepopup() {
    this.ref.close();
  }
}

