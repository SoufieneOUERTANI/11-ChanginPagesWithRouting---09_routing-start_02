import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";

export interface CanComponentDesactivate{
    canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDesactivate>{
    canDeactivate(component: CanComponentDesactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
} 