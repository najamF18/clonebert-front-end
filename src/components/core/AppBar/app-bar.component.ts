import { UserSession } from '@/sdk';
import { CoreService } from '@/services/core.service';
import Component from 'vue-class-component';
import VueWrapper from '../Vue/vue.wrapper';

@Component
export default class AppBarComponent extends VueWrapper {

    public CoreSrv = new CoreService();
    

    get IsLinked(){
        if(new UserSession()._session.value?.api_key && new UserSession()._session.value?.api_secret){
            return true;
        }
        return false;
    }
    
}
