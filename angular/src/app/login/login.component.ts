import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Permissions } from "../services";
import { Api } from "../services/api.service";


@Component({
    templateUrl: './login.component.html'
})
export class Login implements OnDestroy {
    subscription: Subscription[] = [];

    tenant$ = this.api.getTenant();

    constructor(private _router: Router, private api: Api, public permissions: Permissions) {

    }

    form = new FormGroup({
        user: new FormControl(),
        pass: new FormControl(),
        tenant: new FormControl(),
    });

    submit() {
        this.subscription.push(this.api.login(this.form.value as any).subscribe((res: any) => {
            this.permissions.token = res.accessToken;
            this._router.navigateByUrl('/weather');
        }));
    }

    ngOnDestroy(): void {
        this.subscription.forEach(x => {
            if (!x.closed) {
                x.unsubscribe();
            }
        });
    }




} 
