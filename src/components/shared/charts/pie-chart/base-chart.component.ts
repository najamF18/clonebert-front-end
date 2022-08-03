import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Mixins, Prop} from 'vue-property-decorator';
@Component
export default class BaseChartComponent extends VueWrapper {
    @Prop({
        required: true,
        type: Object
    })
    private readonly options!: string;

    @Prop({
        required: true,
        type: Array
    })
    private readonly series!: string;

    @Prop({
        required: true,
        type: String
    })
    private readonly type!: string;
    @Prop({
        type: String
    })
    private readonly width!: string;
}
