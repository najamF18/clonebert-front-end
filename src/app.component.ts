import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import FooterComponent from './components/core/Footer/footer.component';
import ConfirmComponent from './components/shared/Confirm/confirm.component';

@Component({
    components: {
        ConfirmComponent,
        FooterComponent
    }
})
export default class AppComponent extends VueWrapper {}
