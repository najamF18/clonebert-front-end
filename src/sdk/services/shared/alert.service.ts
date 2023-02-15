import {ServiceClass} from '@/decorators';
import Swal from 'sweetalert2';

@ServiceClass()
export class AlertService {
    public show(
        type: 'success' | 'warning' | 'error' | 'info' | 'question',
        message: string,
        background: string = '#191c24',
        position?: 'top' | 'center' | 'bottom',
        timer: number = 5000,
        timerProgressBar: boolean = true,
        showConfirmButton:boolean=false,
    ) {
        return Swal.fire({
            toast: true,
            width:'60vw',
            icon: type,
            html: `<div style="margin-top:20px;font-size: 0.9rem;">${message}</div>`,
            position: position ?? 'top',
            timer,
            background,
            color: '#ffff',
            showConfirmButton,
            timerProgressBar,
        });
    }
}
