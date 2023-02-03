import VueWrapper from '@/components/core/Vue/vue.wrapper';
import DrawerComponent from '@/views/drawer/drawer.component';
import {Component, Watch} from 'vue-property-decorator';
import { SocialMediaApi } from '@/sdk/api-services/social-media/social-media.api';
import FollowersComponent from './followers/followers.component';
import { PostModel, SocialMediaService, TimelinePostModel } from '@/sdk';


@Component({
    components: {
        FollowersComponent
    }
})
export default class FeedComponent extends VueWrapper {
    public SocialMediaSrv = new SocialMediaService();
    public model = 'post-model';
    public media_file: Blob | null = null;
    public description: string | null = null;
    public image: any = null;
    public counterVal = 0;

    public $refs!: {
        fileInput: HTMLInputElement;
    };

    public links = [
        {title: 'Feeds', icon: 'mdi-view-dashboard', link: 'Posts'},
        {title: 'Activity', icon: 'mdi-forum', link: 'Timeline'}
    ];

    @Watch('description')
    onDescriptionChange() {
        if (this.description!.length > 999) this.description = this.description!.substring(0, 999);
    }

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
                    this.SocialMediaSrv.timelinePosts = new Array<TimelinePostModel>();
                    this.SocialMediaSrv.feeds = new Array<TimelinePostModel>();
                    this.SocialMediaSrv.getTimelinePosts();
                    this.SocialMediaSrv.getFeeds();
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

    uploadImage(event: any) {
        const file = event.target.files[0];
        this.media_file = file;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.image = reader.result;
        });
        reader.readAsDataURL(file);
    }

    get count() {
        if(this.description!){
            return this.description!.length;
        }
        else{
            return '0';
        }
        
    }
}
