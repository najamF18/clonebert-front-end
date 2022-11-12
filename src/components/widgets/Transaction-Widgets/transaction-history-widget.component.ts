
import { TransactionService } from '@/sdk';
import Vue from 'vue';
import Component from 'vue-class-component';

interface GraphDataType {
    dataOf: string | null;
    [key: string]: any | null;
}

@Component
export default class TransactionHistoryWidget extends Vue {
    public TransactionSrv = new TransactionService();
    public graphData: Array<GraphDataType> = [];
    public countData: Array<any> = [];
    public PieChartData = [];

    public mounted() {
        this.getGraphData();
    }

    public getGraphData() {
        this.TransactionSrv.getPieChartData();
        this.TransactionSrv.PieCharrData.subscribe(res => {
            this.PieChartData = res;
            console.log("PieChart Data",this.PieChartData); 
           this.option.series[0].data = this.PieChartData.map(({name, position}) => ({name: name, value: position})) as any;
        });
    }

    public option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: '#2a2d3a'
        },
        legend: {
            show: false,
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
                data: this.PieChartData.map( ({name, num_shares}) => ({name :name, value:num_shares}) )
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
