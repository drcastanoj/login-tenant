import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Permissions } from "./permissions.service";


@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.permissions.token) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}