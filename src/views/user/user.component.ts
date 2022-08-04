import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import DrawerComponent from '../drawer/drawer.component';

@Component({
    components: {
        DrawerComponent
    }
})
export default class UserComponent extends VueWrapper {}
