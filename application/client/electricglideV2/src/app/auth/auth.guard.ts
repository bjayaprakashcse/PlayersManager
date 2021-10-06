 import { Injectable, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, GuardsCheckStart, GuardsCheckEnd
} from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BroadcastService } from './broadcast.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  @Output() getPermission = new EventEmitter();
  public jwtToken: any;
  public accessRoutes: any;
  public userRole: any;
  public viewPermission: any;
  public routeName: any;
  public checkAdmin: any;
  public landingPageObject: any;
  public projectScreen: any;
  public userId: any;
  public permissions: any[] = [];
  public adminpermission: any = [];
  public userpermission: any = [];
  public devpermission: any = [];
  public guestpermission: any = [];
  public routearray: any[] = [];

  constructor(
    private route: Router,
    public broadcastService: BroadcastService
  ) {
    this.broadcastService.currentUserName.subscribe(authGuardValue => {
      // @ts-ignore
      this.accessRoutes = authGuardValue.Access;
      console.log('access routes', this.accessRoutes);
    });
    this.route.events.pipe(filter((value: any) => value instanceof GuardsCheckStart)).subscribe((value: GuardsCheckStart) => {
      this.routeName = value.url.split('/');
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
     console.log('------loggedvalue----', state.url);
    return this.checkLoogedIn(state.url);
  }
  checkLoogedIn(url: String ) {
    this.routeName = url.split('/');
    console.log('checkLoogedIn', url);
    console.log('this.routeName checkLoogedIn', this.routeName);
    this.userId = sessionStorage.getItem('Id');
    if (this.userId !== null) {
      this.jwtToken = sessionStorage.getItem('JwtToken');
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(this.jwtToken);
      console.log('decodedToken', decodedToken);
      this.userRole = decodedToken.role;
      console.log('this.userRole ======>>>>', this.userRole);
      this.accessRoutes = JSON.parse(sessionStorage.getItem('Access') || '{}');
      console.log('this.accessRoutes ======>>>>', this.accessRoutes);
      if (this.accessRoutes) {
        if (this.routeName && this.routeName[1].includes('?')) {
          this.routeName = this.routeName[1].split('?');
          this.routeName[1] = this.routeName[0];
        }
        this.accessRoutes.forEach((element: any) => {
          this.permissions = [];
          if (this.userRole) {
            console.log('this.userRole', this.userRole);
            console.log('element ==========>>', element);
            if(element.role === this.userRole) {
              console.log('You are login with role', this.userRole);
              for(let i = 0; i < element.screens.length; i++) {
                this.permissions.push(element.screens[i].screenname);
                this.routearray.push(element.screens[i].screenname);
                this.routearray = this.routearray.filter((item, index) => this.routearray.indexOf(item) === index)
                this.permissions = this.permissions.filter((item, index) => this.permissions.indexOf(item) === index)
              }
              this.broadcastService.sendMessage({ role: this.permissions })
            }
            // const permissionlevel = JSON.parse(element[this.userRole].value);
            // for (let key in permissionlevel) {
            //   const accessvalue = permissionlevel[key];
            //   for (let role in accessvalue[0]) {
            //     if (role == this.userRole) {
            //       if (accessvalue[0][role].value == 'true') {
            //         for (let i = 0; i < this.route.config.length; i++) {
            //           this.viewPermission = accessvalue[0][role].value;
            //           this.permissions.push(key);
            //           this.routearray.push(key);
            //           this.routearray = this.routearray.filter((item, index) => this.routearray.indexOf(item) === index)
            //           this.permissions = this.permissions.filter((item, index) => this.permissions.indexOf(item) === index)
            //         }
            //         console.log('this.viewPermission ======>>>>', this.viewPermission);
            //         console.log('this.routearray', this.routearray);
            //         console.log('this.permissions =======>>>>', this.permissions);
            //         this.broadcastService.sendMessage({ role: this.permissions });
            //       }
            //     }
            //   }
            // }
          }
        });
        if (this.routeName[1] == 'home') {
          return true
        }
        return this.routearray.filter(routevalue => routevalue === this.routeName[1]).length > 0;
      }
    } else {
      if(this.accessRoutes) {
        this.permissions = []
        this.accessRoutes.forEach((route: any) => {
          if(route.role === 'Guest') {
            for(let i = 0; i < route.screens.length; i++) {
              this.permissions.push(route.screens[i].screenname);
              this.routearray.push(route.screens[i].screenname);
              this.routearray = this.routearray.filter((item, index) => this.routearray.indexOf(item) === index)
              this.permissions = this.permissions.filter((item, index) => this.permissions.indexOf(item) === index)
            }
            this.broadcastService.sendMessage({ role: this.permissions })
          }
        })
        console.log('this.routeName', this.routeName);
        return this.routearray.filter(routevalue => routevalue === this.routeName[1]).length > 0;
      }
      else {
        this.route.navigate(['/home']);
        return false;
      }
    }
    return false;
  }
}
