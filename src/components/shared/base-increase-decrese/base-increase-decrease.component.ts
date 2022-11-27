import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class BaseIncreaseDecreaseComponent extends VueWrapper {
    @Prop({
        required: true,
        type: String
    })
    private readonly title!: string;

    @Prop({
        required: true,
        type: Number
    })
    private readonly gains!: number;
}
