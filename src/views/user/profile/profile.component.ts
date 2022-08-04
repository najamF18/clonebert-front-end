import VueWrapper from '@/components/core/Vue/vue.wrapper';
import NavigationCardComponent from '@/components/shared/navigation-card/navigation-card.component';
import {ShowableRoute} from '@/globals';
import Component from 'vue-class-component';

@Component({
    components: {
        NavigationCardComponent
    }
})
export default class ProfileComponent extends VueWrapper {
    public NavigationLinks: Array<Array<ShowableRoute>> = [];

    public created() {
        this.NavigationLinks =
            this.$helpers.getShowableRoutes(this.$route.matched[1].name!)?.reduce((acc: Array<Array<ShowableRoute>>, curr) => {
                if (!curr.Position) {
                    if (acc.length) {
                        acc[0].push(curr);
                    } else {
                        acc.push([curr]);
                    }
                } else {
                    const index = acc.findIndex(x => x[0].Position === curr.Position);
                    if (index > -1) {
                        acc[index].push(curr);
                    } else {
                        acc.push([curr]);
                    }
                }
                return acc;
            }, []) ?? [];
    }
}
