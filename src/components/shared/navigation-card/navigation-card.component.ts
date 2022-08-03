import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {ShowableRoute} from '@/globals';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NavigationCardComponent extends VueWrapper {
    @Prop({
        default: () => [],
        type: Array
    })
    private readonly navigationLinks!: Array<Array<ShowableRoute>>;

    @Prop({
        default: 'System Data Items',
        type: String
    })
    public titleOne!: string;

    @Prop({
        default: 'State Data Items',
        type: String
    })
    public titleTwo!: string;
}
