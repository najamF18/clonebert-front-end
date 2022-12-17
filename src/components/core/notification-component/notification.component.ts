import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';

@Component
export default class NotificationComponent extends VueWrapper {
        public fav = true;
      public menu = false;
      public message = false;
      public hints=true;

    //   https://dribbble.com/shots/18578872-Talentswide-Homepage
}
