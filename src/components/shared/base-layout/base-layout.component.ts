import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {ShowableRoute} from '@/globals';
import {Component} from 'vue-property-decorator';
import NavigationCardComponent from '../navigation-card/navigation-card.component';

@Component({
    components: {
        NavigationCardComponent
    },

    metaInfo() {
        return {
            title: this.$helpers.titleize(this.$route.meta?.title ?? this.$route.name ?? ''),
            titleTemplate: '%s | MHParks.com',
            meta: [
                ...(this.$route.meta?.description ? [{name: 'description', content: this.$route.meta.description}] : []),
                ...(this.$route.meta?.keywords ? [{name: 'keywords', content: this.$route.meta.keywords}] : []),
                ...[{name: 'author', content: this.$route.meta?.author ?? 'mhparks.com'}],
                ...[{name: 'robots', content: this.$route.meta?.robots ?? 'Content=Index, Follow'}]
            ]
        };
    }
})
export default class BaseLayoutComponent extends VueWrapper {
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
