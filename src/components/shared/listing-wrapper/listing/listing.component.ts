import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {AnyObject} from '@/globals';
import {GLOBAL_CONSTANTS} from '@/globals/constants';
import {Component, Prop, PropSync} from 'vue-property-decorator';
import {DataOptions, DataPagination} from 'vuetify';

const _footerProps = {
    itemsPerPageOptions: GLOBAL_CONSTANTS.itemsPerPageOptions,
    itemsPerPageText: 'Load Records'
};

@Component({
    inheritAttrs: false
})
export default class ListingComponent extends VueWrapper {
    public e1 = 'All';
    public items = [
        {name: 'Active', value: 'TRUE'},
        {name: 'Inactive', value: 'FALSE'},
        {name: 'All', value: null}
    ];
    // Props
    @Prop({
        default: () => [],
        type: Array
    })
    private readonly data!: Array<AnyObject>;

    @Prop({default: 1, type: Number})
    private readonly ServerItems!: number;

    @Prop({
        default: () => [],
        type: Array
    })
    private readonly headers!: Array<AnyObject>;

    @Prop({
        default: () => {
            return _footerProps;
        },
        type: Object
    })
    footerProps!: AnyObject;

    @PropSync('expanded', {
        default: () => {
            return [];
        },
        type: Array
    })
    expandedSync!: Array<string>;

    @PropSync('status', {
        default: () => {
            return null;
        },
        type: String
    })
    statusSync!: string;
}
