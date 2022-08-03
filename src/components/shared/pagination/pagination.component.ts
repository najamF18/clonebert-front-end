import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {PaginationService} from '@/sdk';
import {FilterModel} from '@/sdk/models/common/filter.model';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class PaginationComponent extends VueWrapper {
    public page = 1;

    @Prop({
        type: Object,
        default: () => {
            return new FilterModel();
        }
    })
    filter!: FilterModel;

    private PagSrv = new PaginationService();
    // Methods
    public setCurrentPage(page: number) {
        if (this.PagSrv.CurrentPage.value !== page) {
            this.PagSrv.CurrentPage.next(page);
            this.$emit('change-page', page);
        }
    }

    public beforeDestroy() {
        this.unsubscribeSubscriptions();
    }
}
