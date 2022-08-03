import {Component, Prop} from 'vue-property-decorator';
import {ValidationProvider} from 'vee-validate';
import BaseInput from '../Input/base-input';

@Component({
    components: {
        ValidationProvider
    }
})
export default class BaseDatePickerComponent extends BaseInput {
    @Prop({
        default: () => ({
            label: ''
        }),
        type: Object
    })
    fieldProps!: object;

    dialog = false;

    @Prop({
        type: Boolean
    })
    private readonly format?: boolean;

    get DateValue() {
        const oldVal = this.value ?? '';

        if (this.format) {
            return oldVal ? this.$helpers.formatDate(this.value as any, 'MM/dd/yyy') : null;
        }
        console.log(this.value);
        return oldVal;
    }
}
