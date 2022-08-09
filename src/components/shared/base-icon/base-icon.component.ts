import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class BaseIconComponent extends VueWrapper {
    @Prop({
        required: true,
        type: String
    })
    private readonly iconName!: string;

    @Prop({
        required: true,
        type: String
    })
    private readonly color!: string;
}
