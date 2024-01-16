import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';
import { Userinfo } from '../store/Model/user.model';

export const loginGuard: CanActivateFn = (route, state) => {

  const service = inject(UserService)
  const router = inject(Router)

  const userinfo: Userinfo = service.Getuserdatafromstorage();
  console.log("From gaurd userinfo:",userinfo);
  if (userinfo.username != '' && userinfo.username != null) {
    // if (menuname != '') {
    //   service.HaveMenuAccess(userinfo.role, menuname).subscribe(item => {
    //     const _menudata = item;
    //     console.log(_menudata);
    //     if (_menudata.length > 0) {
    //       return true
    //     } else {
    //       alert('Unautorized access.')
    //       router.navigate(['']);
    //       return false;
    //     }
    //   })
    // } else {
    //   return true;
    // }
    console.log("From gaurd :",true);
    return true;
  } else {
    console.log("From gaurd :",false);
    router.navigate(['login']);
    return false;
  }
};
