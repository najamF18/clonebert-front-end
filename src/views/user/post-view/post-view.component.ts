import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {PostModel, SocialMediaService} from '@/sdk';
import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';

import {Component} from 'vue-property-decorator';

@Component
export default class PostViewComponent extends VueWrapper {
    public socialMediaSrv = new SocialMediaService();
    public post = new PostModel();

    mounted() {
        if (this.$route.params.id) {
            console.log(this.$route.params.id);
            new SocialMediaApi().getSharedPostById(this.$route.params.id).subscribe(res => {
                console.log(res);
                this.post = res;
                console.log(this.post, 'post');
            });
        }
    }
}
