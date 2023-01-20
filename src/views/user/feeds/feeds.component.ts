import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import FollowersComponent from './followers/followers.component';
import { SocialMediaService } from '@/sdk';


@Component({
    components: {
        FollowersComponent
    }
})
export default class FeedComponent extends VueWrapper {
    public SocialMediaSrv = new SocialMediaService();
    public model = 'post-model';
    public newPost = {
        media_file: '',
        description: ''
    };

    public links = [
        {title: 'Feeds', icon: 'mdi-view-dashboard', link: 'Posts'},
        {title: 'Timeline', icon: 'mdi-forum', link: 'Timeline'}
    ];

    CreatePost() {
        this.LoaderSrv.showFullScreenLoader('Creating Post');
        console.log(this.newPost);
        const fd = new FormData();
        fd.append('description', this.newPost.description);

        fd.append('media_file', (this.newPost.media_file as unknown) as Blob);

        new SocialMediaApi()
            .CreatePost(fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'post created successfully');

                    new SocialMediaService().getTimelinePosts();
                    this.CoreSrv.CloseModal(this.model);
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