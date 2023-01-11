import {ServiceClass} from '@/decorators';
import Swal from 'sweetalert2';

@ServiceClass()
export class AlertService {
    public show(
        type: 'success' | 'warning' | 'error' | 'info' | 'question',
        message: string,
        background: string = '#191c24',
        position?: 'top' | 'center' | 'bottom',
        timer: number = 3000,
        timerProgressBar: boolean = true,
        showConfirmButton:boolean=false,
    ) {
        return Swal.fire({
            toast: true,
            icon: type,
            html: `<div style="margin-top:20px;font-size: 0.9rem;">${message}</div>`,
            position: position ?? 'top-end',
            timer,
            background,
            color: '#ffff',
            showConfirmButton,
            timerProgressBar
        });
    }
}
