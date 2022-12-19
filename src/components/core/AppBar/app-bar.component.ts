import { UserSession } from '@/sdk';
import { CoreService } from '@/services/core.service';
import Component from 'vue-class-component';
import VueWrapper from '../Vue/vue.wrapper';
import NotificationBox from './../notificationBox/notification-box.component';

@Component({
    components:{
        NotificationBox
    }
})
export default class AppBarComponent extends VueWrapper {
    public CoreSrv = new CoreService();
    
    
}
