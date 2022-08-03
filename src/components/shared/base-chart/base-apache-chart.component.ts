import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';
import {AnyObject} from 'chart.js/types/basic';

@Component
export default class BaseApacheChartComponent extends VueWrapper {
    @Prop({
        required: true,
        type: Object
    })
    public readonly options!: AnyObject;

    @Watch('options', {immediate: true, deep: true})
    optionsChanged() {
        if (!!this.thisChart && !!this.options) {
            this.thisChart.setOption(this.options);
            this.resize();
        }
    }

    public $refs!: {
        chart: any;
    };

    public thisChart: echarts.EChartsType | null = null;

    public mounted() {
        this.init();
    }

    public init() {
        this.thisChart = echarts.init(this.$refs.chart);

        if (!!this.options) {
            this.thisChart.setOption(this.options as any);
            this.resize();
        }
    }

    // Resize function
    public resize() {
        setTimeout(() => {
            this.thisChart?.resize();
        }, 200);
    }
}
