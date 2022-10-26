import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';


@Component({
    components: {
        DrawerComponent
    }
})
export default class FeedComponent extends VueWrapper {

}