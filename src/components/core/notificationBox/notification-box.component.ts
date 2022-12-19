import { SocialMediaApi } from "@/sdk/api-services/social-media/social-media.api";
import { CoreService } from "@/services/core.service";
import { Component } from 'vue-property-decorator';
import VueWrapper from "../Vue/vue.wrapper";

@Component
export default class NotificationBox extends VueWrapper {
    public fav = true;
    public menu = false;
    public message = true;
    public hints = true;

    mounted(){
        new SocialMediaApi().getNotificationsList().subscribe(
            res =>{
                console.log(res)
            },
            err =>{
                console.log(err);
            }
        )
    }
}
