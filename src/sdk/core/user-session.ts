import {SessionModel} from '../models/authentication/session.model';
import {CookieBrowser, Cookies} from './cookie-browser';
import {ServiceClass} from '../../decorators';
import {BehaviorSubject} from 'rxjs';
import {parseJwt} from '@/globals';
import {JwtPayloadModel} from '..';
import {addDays} from 'date-fns';

@ServiceClass()
export class UserSession {
    private prefix: string = '$Clonebert$:';
    public _session = new BehaviorSubject<SessionModel | null>(null);

    private Cookie: Cookies = new CookieBrowser();

    get Session() {
        return this._session.value;
    }

    set Session(session: SessionModel | null) {
        this._session.next(session);
    }

    constructor() {
        this.fetchCookies();
    }

    public fetchCookies() {
        this._session.next(
            new SessionModel({
                // Email: this.load('Email'),
                username: this.load('username'),
                uid: this.load('uid'),
                email: this.load('email'),
                token: this.load('token'),
                api_key: this.load('api_key'),
                api_secret: this.load('api_secret'),
                profile_pic: this.load('profile_pic'),
                location: this.load('location')
                // RememberMe: this.load('RememberMe'),
                // Role: this.load('Role'),
                // UserId: this.load('UserId'),
                // UserName: this.load('UserName'),
                // DisclaimerAccepted: this.load('DisclaimerAccepted')
            })
        );
    }

    public get isUserAuthenticated() {
        if (!this.Session?.token) {
            this.clear();
            return false;
        }

        return true;
    }
    //     const jwtData = parseJwt<JwtPayloadModel>(this.Session.JwtToken);

    //     if (!jwtData.exp) {
    //         this.clear();
    //         return false;
    //     }

    //     //  - 10 * 60 * 1000
    //     if (new Date().valueOf() >= jwtData.exp * 1000) {
    //         this.clear();
    //         return false;
    //     }

    //     return true;
    // }

    // public get isTokenExpired() {
    //     return !this.isUserAuthenticated;
    // }

    public save() {
        if (this.Session) {
            for (const item of Object.entries(this.Session)) {
                this.persist(item[0], item[1], addDays(Date.now(), 1));
            }
            return true;
        }
        return false;
    }

    private load(key: string): any {
        if (this.Cookie) {
            return this.Cookie.get(`${this.prefix}${key}`);
        }
    }
    private persist(key: string, value: any, expires: Date) {
        this.Cookie.set(`${this.prefix}${key}`, typeof value === 'object' ? JSON.stringify(value) : value, {expires, domain: '.mhparks.com'});
    }

    public clear(): void {
        if (this._session.value) {
            Object.keys(this._session.value).forEach((key: string) => this.Cookie.remove(`${this.prefix}${key}`));
        }
        if (this._session.value) {
            this._session.next(null);
        }
    }
}
