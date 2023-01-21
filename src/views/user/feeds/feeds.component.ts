import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import FollowersComponent from './followers/followers.component';
import { PostModel, SocialMediaService } from '@/sdk';


@Component({
    components: {
        FollowersComponent
    }
})
export default class FeedComponent extends VueWrapper {
    public SocialMediaSrv = new SocialMediaService();
    public model = 'post-model';
    public media_file:Blob|null = null;
    public description:string|null = null;

    public links = [
        {title: 'Feeds', icon: 'mdi-view-dashboard', link: 'Posts'},
        {title: 'Timeline', icon: 'mdi-forum', link: 'Timeline'}
    ];

    CreatePost() {
        this.LoaderSrv.showFullScreenLoader('Creating Post');
        const fd = new FormData();
        fd.append('description', this.description!);

        fd.append('media_file', this.media_file!);

        new SocialMediaApi()
            .CreatePost(fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'post created successfully');
                    this.SocialMediaSrv.timelinePosts = new Array<PostModel>();
                    this.SocialMediaSrv.getTimelinePosts();
                    this.CoreSrv.CloseModal(this.model);
                    this.description = null;
                    this.media_file = null;
                },
                err => {
                    this.AlertSrv.show('error', err);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }

    ChangeRoute(name: string) {
        this.$router.push({name: name});
    }

  
}