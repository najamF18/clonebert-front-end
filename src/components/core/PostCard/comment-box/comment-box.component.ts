import { CommentModel } from '@/sdk';
import {SocialMediaApi} from '@/sdk/api-services/social-media/social-media.api';
import {CoreService} from '@/services/core.service';
import { Component, Prop } from 'vue-property-decorator';
import VueWrapper from '../../Vue/vue.wrapper';


@Component
export default class CommentBoxComponent extends VueWrapper {
    public comment: null | string = null;
    public commentData  = new Array<CommentModel>();
    public isLoading =true;
    public isCommenting =false;
    @Prop({default: '', type: String})
    protected readonly postId!: string;
    mounted() {
        this.getComments();
    }

    

    getComments() {
        console.log("postId",this.postId);
        new SocialMediaApi().getCommentsById(this.postId).subscribe(
            res => {
                
                this.commentData = res.comments;
                console.log(this.commentData);
            },
            err => {
                console.log(err);
            }
        ).add(() =>{
           this.isLoading = false;
        })
    }

    AddComment(){
        this.isCommenting=true;
        new SocialMediaApi()
            .addComment(this.postId,this.comment!)
            .subscribe(
                res => {
                    this.comment ='';
                   this.getComments();
                },
                err => {
                    console.log(err);
                }
            )
            .add(() => {
                this.isCommenting = false;
            });
    }
}
