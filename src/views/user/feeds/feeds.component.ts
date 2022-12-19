import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component} from 'vue-property-decorator';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';


@Component
export default class FeedComponent extends VueWrapper {
    public model = 'post-model';
   public newPost = {
        media_file: '',
        title: '',
        description: ''
    };

    CreatePost() {
        this.LoaderSrv.showFullScreenLoader('Creating Post');
        console.log(this.newPost);
        const fd = new FormData();
        fd.append('title',this.newPost.title);
        fd.append('description',this.newPost.description);
        fd.append('media_file',this.newPost.media_file as unknown as Blob);
        new SocialMediaApi()
            .CreatePost(fd)
            .subscribe(
                res => {
                    this.AlertSrv.show('success', 'post created successfully');
                },
                err => {
                    this.AlertSrv.show('error', err);
                }
            )
            .add(() => {
                this.LoaderSrv.hideFullScreenLoader();
            });
    }
}