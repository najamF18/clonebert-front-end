import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { SocialMediaService } from '@/sdk';

import {Component} from 'vue-property-decorator';

@Component
export default class TimelineComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public tabs = null;

    mounted(){
        this.socialMediaSrv.getTimelinePosts();
    }
}
