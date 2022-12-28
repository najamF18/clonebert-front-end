import { SocialMediaService } from '@/sdk';
import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';
import {CoreService} from '@/services/core.service';
import {Component} from 'vue-property-decorator';
import VueWrapper from '../Vue/vue.wrapper';
import CommentBoxComponent from './comment-box/comment-box.component';

@Component({
    components:{
        CommentBoxComponent
    }
})
export default class PostCardComponent extends VueWrapper {
   public IsLikedByMe = false;
    public commentBox = false;
    public confirmModel= "confirm-model";
    public val=0;

    public SocialMediaApi = new SocialMediaApi();

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

    SharePost(postId:string){
        this.ConfirmSrv.open("Share Post",'You want to share this post').then((res) => {
            
            if(res){
                this.LoaderSrv.showFullScreenLoader('Sharing Post...');
                this.SocialMediaApi.SharePost(postId)
                    .subscribe(
                        res => {
                            console.log(res);
                            this.AlertSrv.show('success', "Post Share Successfully");
                            
                        },
                        err => {}
                    )
                    .add(() => {
                        this.LoaderSrv.hideFullScreenLoader();
                    });
            }
        
        })
        
    }
    LikePost(id:string){
        this.IsLikedByMe =!this.IsLikedByMe;
        if(this.IsLikedByMe){
            this.val=1;
        }
        else{
            this.val=0;
        }
        new SocialMediaApi().likePost(id).subscribe(res =>{
            console.log("like res",res);
        })
    }

   
}
