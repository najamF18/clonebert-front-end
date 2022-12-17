import { UserSession } from '@/sdk';
import { CoreService } from '@/services/core.service';
import Component from 'vue-class-component';
import NotificationComponent from '../notification-component/notification.component';
import VueWrapper from '../Vue/vue.wrapper';

@Component({
    components:{
        NotificationComponent
    }
})
export default class AppBarComponent extends VueWrapper {

    public CoreSrv = new CoreService();
    
    
}
