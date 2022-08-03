import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FullPageDialogComponent extends VueWrapper {
    public notifications: boolean = false;
    public sound: boolean = true;
    public widgets: boolean = false;

    public once: boolean = false;
    public isMounted: boolean = false;

    @Prop({
        required: true,
        type: String
    })
    public readonly name!: string;

    @Prop({
        required: true,
        type: String
    })
    private readonly dialogTitle!: string;
    @Prop({
        required: true,
        type: String
    })
    private readonly icon!: string;

    @Prop({
        default: false,
        type: Boolean
    })
    model!: boolean;

    public get Show() {
        const isShow = this.CoreSrv.getOpenedModals.indexOf(this.name) != -1;

        if (isShow && !this.once && this.isMounted) {
            this.$emit('dialogOpen');
            this.once = true;
        }
        if (!isShow) {
            this.once = false;
        }

        return isShow;
    }
    public set Show(val: any) {}

    public mounted() {
        this.isMounted = true;
    }

    public Close() {
        this.CoreSrv.CloseModal(this.name);
        this.$emit('ModalClosed');
        this.once = false;
    }

    // @Prop({
    //     required: true,
    //     type: Boolean,
    //     default: false
    // })
    // private readonly openDialog!: boolean;
}
