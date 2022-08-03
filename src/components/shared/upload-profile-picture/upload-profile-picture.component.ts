import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {Cropper, CircleStencil} from 'vue-advanced-cropper';
import {PRINCIPAL_TYPES, MEDIA_TYPES, resizeImageToSpecificWidth} from '@/globals/constants';
import {LoaderService, ApiAuth, AlertService, UserSession} from '@/sdk';
import {UsersService} from '@/sdk/services/users/users.service';

@Component({
    components: {
        Cropper,
        CircleStencil
    }
})
export default class UploadProfilePictureComponent extends VueWrapper {
    public $refs!: {
        cropperRef: any;
        file: any;
    };
    public image = '';
    public IsMediaExists = false;

    public uploadImage(event: any) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                this.image = (e.target as any).result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    public profileImage = null;

    public get UplaodedImage() {
        return this.$refs.cropperRef.getResult();
    }
    // public async update() {
    //     const {canvas} = this.$refs.cropperRef.getResult();
    //     // const file = await resizeImageToSpecificWidth(canvas.toDataURL());

    //     canvas.toBlob((file: File) => {
    //         if (file) {
    //             const fileToSend = new File([file], 'media.png', {
    //                 type: 'image/png',
    //                 lastModified: Date.now()
    //             });

    //             new LoaderService().showFullScreenLoader();
    //             new UsersApi()
    //                 .updateProfilePicture(new UserSession().Session?.UserId!, fileToSend)
    //                 .subscribe(
    //                     () => {
    //                         new LoaderService().hideFullScreenLoader();
    //                         new AlertService().show('success', 'Profile picture has been successfully uploaded!');
    //                         this.close();
    //                         // this.getMedia();
    //                     },
    //                     ({message}) => {
    //                         new LoaderService().hideFullScreenLoader();
    //                         new AlertService().show('error', message);
    //                     }
    //                 )
    //                 .add(() => {
    //                     new LoaderService().hideFullScreenLoader();
    //                 });
    //         }
    //     }, 'image/png');
    // }

    // public created() {
    //     this.AddSubscription$ = new ApiAuth().UserSession.subscribe(Res => {
    //         if (Res) {
    //             this.image = `${Res.UserPhoto}?${Date.now()}`;
    //         }
    //     });
    //     this.getMedia();
    // }

    public get CropperImage() {
        return {Image: this.image, Canvas: this.$refs.cropperRef.getResult()};
    }

    // public getMedia() {
    //     new LoaderService().showFullScreenLoader();
    //     new MediaApi()
    //         .getOne(PRINCIPAL_TYPES.USER, new ApiAuth().SessionValue!.UserId!)
    //         .subscribe(
    //             media => {
    //                 new LoaderService().hideFullScreenLoader();
    //                 this.IsMediaExists = !!media.Data;
    //             },
    //             () => {
    //                 new LoaderService().hideFullScreenLoader();
    //                 this.IsMediaExists = false;
    //             }
    //         );
    // }
}
