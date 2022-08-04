import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/dashboard/drawer.component';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        DrawerComponent
    }
})
export default class DashboardComponent extends VueWrapper {}
