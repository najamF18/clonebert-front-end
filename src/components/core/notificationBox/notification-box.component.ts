import { NotificationModel, SocialMediaService } from "@/sdk";
import { SocialMediaApi } from "@/sdk/api-services/social-media/social-media.api";
import { CoreService } from "@/services/core.service";
import { Component } from 'vue-property-decorator';
import VueWrapper from "../Vue/vue.wrapper";

@Component
export default class NotificationBox extends VueWrapper {
    public menu = false;
    public isLoading = false;

    public SocialMediaSrv = new SocialMediaService();
    public connection: WebSocket | null = null;

    created() {
        this.connection = new WebSocket('wss://api.clonebert.com/ws/notification-alert/');

        this.connection.onopen = function(e) {
            console.log(e);
            console.log('Socket Connected Successfully');
        };
        this.connection.onmessage = e => {
            console.log('messageReceived', e);
            this.SocialMediaSrv.getNotifications();
        };

        this.connection.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };
    }

    mounted() {
        this.SocialMediaSrv.getNotifications();
    }

    ReadNotification(id: string, des: string) {
        new SocialMediaApi().ReadNotification(id, des).subscribe(res => {
            // this.SocialMediaSrv.getNotifications();
        });
    }

    ReadAllNotifications(){
        this.isLoading = true;
        new SocialMediaApi().ReadAllNotifications().subscribe(
            res =>{
                console.log(res);
                this.SocialMediaSrv.getNotifications();
                this.isLoading = false;
            }
        )
    }
}

    