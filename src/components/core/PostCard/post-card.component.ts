import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';
import {CoreService} from '@/services/core.service';
import {Component} from 'vue-property-decorator';
import VueWrapper from '../Vue/vue.wrapper';

@Component
export default class PostCardComponent extends VueWrapper {
    public fav = true;
    public menu = false;

    // mounted() {
    //     new SocialMediaApi().getNotificationsList().subscribe(
    //         res => {
    //             console.log(res);
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //     );
    // }
}
