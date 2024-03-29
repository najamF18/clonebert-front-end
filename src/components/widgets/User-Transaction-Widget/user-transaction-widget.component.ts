import {TransactionService} from '@/sdk';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

interface GraphDataType {
    dataOf: string | null;
    [key: string]: any | null;
}

@Component
export default class UserTransactionWidget extends Vue {
    public TransactionSrv = new TransactionService();
    public graphData: Array<GraphDataType> = [];
    public countData: Array<any> = [];
    @Prop()
    public PieChartData = [];

    public mounted() {
        this.getGraphData();
    }

    // @Watch('PieChartData', {immediate: true, deep: true})
    // ChartUpdated() {
    //     this.getGraphData();
    // }

    public getGraphData() {
        console.log('User PieChart Data', this.PieChartData);
        this.option.series[0].data = this.PieChartData.map((data: any) => ({name: data['name'], value: data['position'].toFixed(2)})) as any;
    }

    public option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: '#2a2d3a'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: 'white'
            }
        },

        series: [
            {
                name: 'Holdings',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },

                labelLine: {
                    show: true
                },
                data: this.PieChartData.map(({name, num_shares}) => ({name: name, value: num_shares}))
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
