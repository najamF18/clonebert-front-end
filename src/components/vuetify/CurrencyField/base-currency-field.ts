import {Component, Prop} from 'vue-property-decorator';
import {ValidationProvider} from 'vee-validate';
import {mask} from 'vue-the-mask';
import BaseInput from '../Input/base-input';
import {makeStr} from '@/globals';

@Component({
    components: {
        ValidationProvider
    },
    directives: {
        mask: (el, binding) => {
            if (!binding.value) return;
            mask(el, binding);
        }
    }
})
export default class BaseCurrencyField extends BaseInput {
    @Prop({
        default: '',
        type: String
    })
    private readonly mask!: string;

    public once: boolean = false;

    public get currency() {
        if (this.value) {
            const v = this.value.toString().split('.');
            // if (v.length === 1 && !this.once) {
            //     v[1] = '00';
            //     this.once = true;
            // }
            v[0] = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return v.join('.');
        }
        return this.value;
        // return this.value ? this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : this.value;
    }
    public set currency(v: any) {
        if (v != null) {
            v = `${v}`;
        }
        if (isNaN(Number(v?.replaceAll(',', '')))) {
            this.$emit('update:value', v);
        } else if (v && `${v}`[`${v}`.length - 1] === '.') {
            this.$emit('update:value', v.replaceAll(',', ''));
        } else {
            this.$emit('update:value', v.replaceAll(',', ''));
        }
    }

    public mounted() {
        setTimeout(() => {
            this.onBlur();
        }, 2000);
    }

    public onBlur() {
        this.currency = !!this.value && typeof this.value === 'string' ? this.value.trim() : this.value;

        if (this.$attrs['add-decimals'] && Number(this.$attrs['add-decimals']) > 0 && this.currency?.toString().indexOf('.') === -1) {
            const str = makeStr(Number(this.$attrs['add-decimals']), '0');
            this.currency = `${this.value}.${str}`;
        }
    }

    // @Prop({
    //     default: null,
    //     type: String
    // })
    // private readonly type!: 'currency' | null;

    continuousMask(model: any) {
        let mask = '';
        if (model && model.length) {
            for (let i = 0; i < model.length; i++) {
                mask += 'X';
            }
        }
        return mask;
    }

    getErrorMessage(error: string) {
        const msg = this.$attrs['error-message'];

        if (msg?.length) {
            return msg;
        } else {
            return error;
        }
    }
}
