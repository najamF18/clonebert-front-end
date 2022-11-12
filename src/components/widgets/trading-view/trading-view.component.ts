import {TransactionService} from '@/sdk';
import Vue from 'vue';
import Component from 'vue-class-component';

interface GraphDataType {
    dataOf: string | null;
    [key: string]: any | null;
}

@Component
export default class TradingView extends Vue {
    $refs!: {
        containerWidget: HTMLElement;
    };

    mounted() {
        const Script = document.createElement('script');
        Script.innerText = `new TradingView.widget({
            "autosize": true,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "withdateranges": true,
  "allow_symbol_change": true,
  "save_image": false,
            "container_id": "tradingview_eccbf"
        });`;
        this.$refs.containerWidget.appendChild(Script);
    }
}
