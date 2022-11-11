import Vue from 'vue';
import Component from 'vue-class-component';
import { createChart } from 'lightweight-charts';
import { Watch } from 'vue-property-decorator';

@Component
export default class CandleChartWidget extends Vue {

    public chart:any;
    public lineSeries:any;

// public areaSeries = this.chart.addAreaSeries({
//   topColor: 'rgba(33, 150, 243, 0.56)',
//   bottomColor: 'rgba(33, 150, 243, 0.04)',
//   lineColor: 'rgba(33, 150, 243, 1)',
//   lineWidth: 2,
// });

    public darkTheme = {
	chart: {
		layout: {
			backgroundColor: '#191c24',
			lineColor: '#2B2B43',
			textColor: '#D9D9D9',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		crosshair: {
			color: '#758696',
		},
		grid: {
			vertLines: {
				color: '#191c24',
			},
			horzLines: {
				color: '#363C4E',
			},
		},
	},
	series: {
			topColor: 'rgba(32, 226, 47, 0.56)',
			bottomColor: 'rgba(32, 226, 47, 0.04)',
			lineColor: 'rgba(32, 226, 47, 1)',
	},
};


    mounted(){
         this.chart = createChart(this.$refs.lineChart as HTMLElement,  { height: 300,
});
    this.lineSeries = this.chart.addLineSeries();
       this.lineSeries.setData([
         { time: '2019-03-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-05-13', value: 76.64 },
    { time: '2019-06-14', value: 81.89 },
    { time: '2019-07-15', value: 74.43 },
    { time: '2019-08-16', value: 80.01 },
    { time: '2019-09-17', value: 96.63 },
    { time: '2019-10-18', value: 76.64 },
    { time: '2019-11-19', value: 81.89 },
    { time: '2019-12-20', value: 74.43 },
    { time: '2020-01-20', value: 74.43 },
    ]);


    this.chart.applyOptions(this.darkTheme.chart);
    }

    
}

