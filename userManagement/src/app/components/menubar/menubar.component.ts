import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Roleaccess, Userinfo } from 'src/app/store/Model/user.model';
import { getmenubyrole } from 'src/app/store/User/User.Selector';
import { fetchmenu } from 'src/app/store/User/User.action';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements DoCheck, OnInit {
  ismenuvisible = false;
  menulist !: Roleaccess[]
  constructor(private router: Router, private store: Store) {

  }
  ngOnInit(): void {
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      const _obj = JSON.parse(jsonstring) as Userinfo;
      this.store.dispatch(fetchmenu({userrole:_obj.role}))
    }

    this.store.select(getmenubyrole).subscribe(item => {
      console.log("----",item);
      this.menulist = item as Roleaccess[];
    })
  }
  ngDoCheck(): void {
    const currentroute = this.router.url;
    if (currentroute === '/login' || currentroute === '/register') {
      this.ismenuvisible = false
    } else {
      this.ismenuvisible = true;
    }
  }

}
