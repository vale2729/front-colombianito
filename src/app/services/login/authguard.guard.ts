import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {

    constructor(private _login: LoginService, private ruta: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const routeurl: string = state.url;
        return this.isLogin(routeurl);
    }

    isLogin(routeurl: string) {


        if (routeurl === '/ch/menu/pago') {
            if (this._login.isLoggedIn()) {
                return true;
            } else {
                return false;
            }
        } else {
            if (this._login.isLoggedIn()) {
                return true;
            } else {
                this._login.redirectUrl = routeurl;
                this.ruta.navigate(['admin'], { queryParams: { returnUrl: routeurl } });
                return false;
            }
        }


    }
}