import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { SocialMediaService } from '@/sdk';

import {Component} from 'vue-property-decorator';


@Component
export default class PostsComponent extends VueWrapper {
    public SocialMediaSrv = new SocialMediaService();

    mounted() {
        this.SocialMediaSrv.getFeeds();
    }

    handleShowPost(id: any) {
        this.$router.push({name: 'Post View', params: {id: id}});
    }
}
