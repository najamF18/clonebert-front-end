import Vue from 'vue';
import Component from 'vue-class-component';

interface GraphDataType {
    dataOf: string | null;
    [key: string]: any | null;
}

@Component
export default class AreaWidget extends Vue {
    // public benchmarkingSrv = new BenchmarkingService();
    // public sendBenchmarkingData = new SendBenchmarkingModel({Type: 'gender'});
    public graphData: Array<GraphDataType> = [];
    public countData: Array<any> = [];
    public toggle_exclusive =null;

    public mounted() {
        this.getGraphData();
    }

    public getGraphData() {
        // this.benchmarkingSrv.getBenchmarkingDataByGender(this.sendBenchmarkingData);
        // this.benchmarkingSrv.BenchmarkingDataByGender.subscribe(res => {
        //     this.graphData = this.$helpers.setGraphData(res);
        //     this.options.dataset['source'] = this.graphData as any;
        //     this.countData[0] = this.$helpers.getCount(res);
        // });
    }

    option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#2a2d3a',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            show: false
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    get series() {
        if (this.graphData.length) {
            const data = [...this.graphData];
            data.shift();

            return data.map((element, index) => {
                switch (index) {
                    case 0:
                        return {
                            type: 'bar',
                            stack: 'x',
                            itemStyle: {
                                borderRadius: [0, 0, 12, 12]
                            }
                        };
                    case data.length - 1:
                        return {
                            type: 'bar',
                            stack: 'x',
                            itemStyle: {
                                borderRadius: [12, 12, 0, 0]
                            }
                        };
                    default:
                        return {
                            type: 'bar',
                            stack: 'x'
                        };
                }
            });
        }
    }
}
