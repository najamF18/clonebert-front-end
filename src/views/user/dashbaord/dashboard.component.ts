import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { TransactionService } from '@/sdk';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        DrawerComponent
    }
})
export default class DashboardComponent extends VueWrapper {
    public TransactionSrv = new TransactionService();
    public holdings = [];
    mounted(){
        this.TransactionSrv.Holdings.subscribe((res) =>{
            this.holdings = res;
        })
            
        }
    }
