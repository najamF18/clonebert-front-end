import {LikeModel, SocialMediaService, TimelinePostModel} from '@/sdk';
import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';
import {CoreService} from '@/services/core.service';
import {Component, Prop} from 'vue-property-decorator';
import VueWrapper from '../Vue/vue.wrapper';

@Component
export default class ShareUserPostCardComponent extends VueWrapper {
    // public IsLikedByMe = false;
    // public commentBox = false;
    // public confirmModel = 'confirm-model';
    // public val = 0;
    // public postLikes = 0;
    // public socialMediaSrv = new SocialMediaService();
    @Prop()
    protected readonly item!: TimelinePostModel;

    // public SocialMediaApi = new SocialMediaApi();

    // mounted() {
    //     this.postLikes = this.likes.length;
    //     if (!!this.likes.find(like => like.liker!.user!.id == this.UserSession.Session!.uid)) {
    //         this.IsLikedByMe = true;
    //     }
    // }

    // SharePost(postId: string) {
    //     this.ConfirmSrv.open('Share Post', 'You want to share this post').then(res => {
    //         if (res) {
    //             this.LoaderSrv.showFullScreenLoader('Sharing Post...');
    //             this.SocialMediaApi.SharePost(postId)
    //                 .subscribe(
    //                     res => {
    //                         console.log(res);
    //                         this.AlertSrv.show('success', 'Post Share Successfully');
    //                     },
    //                     err => {}
    //                 )
    //                 .add(() => {
    //                     this.LoaderSrv.hideFullScreenLoader();
    //                 });
    //         }
    //     });
    // }
    // LikePost(id: string) {
    //     this.IsLikedByMe = !this.IsLikedByMe;
    //     if (this.IsLikedByMe) {
    //         this.postLikes += 1;
    //     } else {
    //         this.postLikes -= 1;
    //     }
    //     new SocialMediaApi().likePost(id).subscribe(res => {
    //         console.log('like res', res);
    //         this.socialMediaSrv.getFeedss();
    //         this.socialMediaSrv.getTimelinePostss();
    //         this.socialMediaSrv.getPostss();
    //     });
    // }

    handlePost(id: any) {
        this.$emit('showPost', id);
        console.log('showPost', id);
    }
}
