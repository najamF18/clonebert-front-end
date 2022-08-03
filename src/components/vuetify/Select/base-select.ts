import {Component} from 'vue-property-decorator';
import {ValidationProvider} from 'vee-validate';
import BaseInput from '../Input/base-input';

@Component({
    components: {
        ValidationProvider
    }
})
export default class BaseSelect extends BaseInput {
    public $refs!: {
        fieldValidationRef: any;
    };

    public reset() {
        this.$refs?.fieldValidationRef?.reset();
    }
}
