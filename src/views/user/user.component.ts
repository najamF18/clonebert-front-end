import AppBarComponent from '@/components/core/AppBar/app-bar.component';
import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import DrawerComponent from '../drawer/drawer.component';

@Component({
    components: {
        DrawerComponent,
        AppBarComponent
    }
})
export default class UserComponent extends VueWrapper {
    created() {
        this.MobileSize();
    }

    public MobileSize() {
        if (window.innerWidth <= 991) {
            this.CoreSrv.Drawer.MobileScreen = true;
            this.CoreSrv.block = true;
        } else if (window.innerWidth >= 991) {
            this.CoreSrv.Drawer.MobileScreen = false;
            this.CoreSrv.block = false;
        }
    }
}
