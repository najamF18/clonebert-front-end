import {ServiceClass} from '@/decorators';
import {LoginModel, SessionModel, SignupModel} from '@/sdk/models';
import {ResetPasswordModel} from '@/sdk/models/authentication/reset-password.model';
import {SdkConfig} from '@/sdk/sdk.config';
import {map} from 'rxjs/operators';
import {BaseApi} from '../base.api';

@ServiceClass()
export class AccountsApi extends BaseApi {
    public login(loginData: LoginModel) {
        return this.POST_Request<SessionModel>(`${this.ApiUrl}/auth/login/`, loginData);
    }

    // public RemoteLogin() {
    //     return this.GET_Request<string>(`${this.ApiUrl}/Account/RemoteLogin`);
    // }
    // public AcceptDisclaimer() {
    //     return this.GET_Request<string>(`${this.ApiUrl}/Account/AcceptDisclaimer`);
    // }

    // public Logout() {
    //     return this.GET_Request<void>(`${this.ApiUrl}/Account/Logout`);
    // }

    public signup(signUpData: SignupModel) {
        return this.POST_Request<{email: any; message: any}>(`${this.ApiUrl}/auth/register/`, signUpData);
    }
    // public sendLink(email: string) {
    //     return this.POST_Request(`${this.ApiUrl}/Account/SendLink`, {email});
    // }

    public forgotPassword(resetPass: ResetPasswordModel) {
        return this.POST_Request<{}>(`${this.ApiUrl}/api/password_reset/`, resetPass);
    }
    // public ResetPassword(resetPass: ResetPasswordModel) {
    //     return this.POST_Request<ResetPasswordModel>(`${this.ApiUrl}/Account/ResetPassword`, resetPass);
    // }
}
