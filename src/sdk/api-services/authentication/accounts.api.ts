import {ServiceClass} from '@/decorators';
import {AnyObject} from '@/globals';
import {ForgotPasswordPasswordModel, LoginModel, SessionModel, SignupModel} from '@/sdk/models';
import {ChangeEmailModel} from '@/sdk/models/authentication/change-email.model';
import {ChangePasswordModel} from '@/sdk/models/authentication/change-password.model';
import {SettingsChangePasswordModel} from '@/sdk/models/authentication/settings-change-password.model';
import {SdkConfig} from '@/sdk/sdk.config';
import {map} from 'rxjs/operators';
import {BaseApi} from '../base.api';

@ServiceClass()
export class AccountsApi extends BaseApi {
    public login(loginData: LoginModel) {
        return this.POST_Request<SessionModel>(`${this.ApiUrl}/auth/login/`, loginData);
    }
    public logout() {
        return this.GET_Request<{}>(`${this.ApiUrl}/auth/logout/`);
    }

    public changePassword(data: SettingsChangePasswordModel) {
        return this.POST_Request<{}>(`${this.ApiUrl}/auth/change-password/`, data);
    }

    public changeEmail(data: ChangeEmailModel) {
        return this.POST_Request<{}>(`${this.ApiUrl}/auth/change-email/`, data);
    }
    public validateUserName(username: AnyObject) {
        return this.POST_Request<{}>(`${this.ApiUrl}/auth/validate-username/`, username);
    }

    public disableAccount() {
        return this.GET_Request<{}>(`${this.ApiUrl}/auth/disable-account/`);
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

    public forgotPassword(forgotPassword: ForgotPasswordPasswordModel) {
        return this.POST_Request<{}>(`${this.ApiUrl}/api/password_reset/`, forgotPassword);
    }
    public resetPassword(resetPassword: ChangePasswordModel) {
        return this.POST_Request<{}>(`${this.ApiUrl}/api/password_reset/confirm/`, resetPassword);
    }
    // public ResetPassword(resetPass: ResetPasswordModel) {
    //     return this.POST_Request<ResetPasswordModel>(`${this.ApiUrl}/Account/ResetPassword`, resetPass);
    // }
}
