import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';
import {AnyObject} from '@/globals';

@Component
export default class BaseChartComponent extends VueWrapper {
    @Prop({
        required: true,
        type: Object
    })
    public readonly options!: AnyObject;
    @Prop({
        required: false,
        type: Object
    })
    public readonly containerStyle!: AnyObject;

    @Watch('options', {immediate: true, deep: true})
    optionsChanged() {
        if (!!this.thisChart && !!this.options) {
            this.thisChart.setOption(this.options);
            this.resize();
        }
    }
    @Watch('containerStyle', {immediate: true, deep: true})
    conatinerSizeChanged() {
        if (!!this.thisChart && !!this.containerStyle) {
            this.resize();
        }
    }

    public $refs!: {
        chart: any;
    };

    public thisChart: echarts.EChartsType | null = null;

    public showLoader() {
        this.thisChart?.showLoading();
    }

    public mounted() {
        this.init();
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    public init() {
        this.thisChart = echarts.init(this.$refs.chart);

        if (!!this.options) {
            this.thisChart.setOption(this.options as any);
            this.resize();
        }
    }

    public setOptions() {
        this.thisChart?.setOption(this.options as any);
    }

    public forceResize() {
        this.thisChart?.resize();
    }

    // Resize function
    public resize() {
        setTimeout(() => {
            this.forceResize();
        }, 200);
    }
}
