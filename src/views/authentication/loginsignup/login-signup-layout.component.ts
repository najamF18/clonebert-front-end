import FooterComponent from '@/components/core/Footer/footer.component';
import VueWrapper from '@/components/core/Vue/vue.wrapper';
import Component from 'vue-class-component';

@Component({
    components: {
        FooterComponent
    }
})
export default class LoginSignupLayoutComponent extends VueWrapper {}
