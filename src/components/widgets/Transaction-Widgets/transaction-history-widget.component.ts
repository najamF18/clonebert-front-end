
import Vue from 'vue';
import Component from 'vue-class-component';

interface GraphDataType {
    dataOf: string | null;
    [key: string]: any | null;
}

@Component
export default class TransactionHistoryWidget extends Vue {
    // public benchmarkingSrv = new BenchmarkingService();
    // public sendBenchmarkingData = new SendBenchmarkingModel({Type: 'gender'});
    public graphData: Array<GraphDataType> = [];
    public countData: Array<any> = [];

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

    public option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show:false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
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
