import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { LoaderService, SessionModel, TransactionsApi, UserSession } from '@/sdk';
import Component from 'vue-class-component';

@Component
export default class ManagePortfolioComponent extends VueWrapper {

    public ApiKey:string| null = null;
    public ApiSecret:string| null = null;
    public sessionModel:SessionModel = new SessionModel();
    public IsApiAdded = false;
    public showForm = false;

    mounted(){
        if(new UserSession()._session.value?.api_key && new UserSession()._session.value?.api_secret){
            this.IsApiAdded = true;
        }
        else{
            this.IsApiAdded = false;
        }
    }
    
    SubmitKeys(){
        this.LoaderSrv.showFullScreenLoader("Loading...");
        new TransactionsApi().VerifyApi(this.ApiKey,this.ApiSecret)
        .subscribe(
            res => {
                Object.assign(this.sessionModel,new UserSession()._session.value);
        this.sessionModel.api_key = this.ApiKey;
        this.sessionModel.api_secret = this.ApiSecret;
        new UserSession()._session.next(this.sessionModel); 
        new UserSession().save();
        console.log(new UserSession()._session.value);
        this.IsApiAdded = true;
        this.AlertSrv.show('success',"Api Keys added successfully");
                },
                err => {
                   console.log(err);
                   this.AlertSrv.show('error',"Invalid API Key ");
                   this.RemoveKeys();
                }
            ).add(() => {
                this.LoaderSrv.hideFullScreenLoader();
                
            });
       
        

    }
    RemoveKeys(){
          Object.assign(this.sessionModel,new UserSession()._session.value);
        this.sessionModel.api_key = null;
        this.sessionModel.api_secret = null;
        new UserSession()._session.next(this.sessionModel); 
        new UserSession().save();
        console.log(new UserSession()._session.value);
        this.IsApiAdded = false;
        this.AlertSrv.show('success',"Api Keys Removed successfully");
    }

    // public changeEmail() {
    //     this.LoaderSrv.showFullScreenLoader();
    //     new AccountsApi()
    //         .changeEmail(this.changeEmailData)
    //         .subscribe(
    //             res => {
    //                 this.AlertSrv.show('success', 'Email changed successfully!');
    //                 this.changeEmailData = new ChangeEmailModel();
    //                 this.UserSession.clear();
    //                 this.$router.push({name: 'Login'});
    //             },
    //             err => {
    //                 this.AlertSrv.show('error', err.message);
    //             }
    //         )
    //         .add(() => {
    //             this.LoaderSrv.hideFullScreenLoader();
    //         });
    // }
}
