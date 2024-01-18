import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/store/Model/user.model';
import { getuserlist } from 'src/app/store/User/User.Selector';
import { getusers } from 'src/app/store/User/User.action';
import { DialogPopComponent } from '../dialog-pop/dialog-pop.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

  userlist!: Users[];
  displayedColums: string[] = ['username', 'name', 'email', 'role', 'status', 'action']
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private store: Store, private dialog: MatDialog
  ){

  }

  ngOnInit(){
    this.store.dispatch(getusers());
    this.store.select(getuserlist).subscribe(item => {
      this.userlist = item;
      this.datasource = new MatTableDataSource<Users>(this.userlist)
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    })
  }
  
  FunctionChangeRole(username: string) {
    this.OpenPopup(username)
  }

  OpenPopup(username: string) {
    this.dialog.open(DialogPopComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: username
      }
    })

  }

}
