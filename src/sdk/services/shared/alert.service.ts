import {ServiceClass} from '@/decorators';
import Swal from 'sweetalert2';

@ServiceClass()
export class AlertService {
    public show(
        type: 'success' | 'warning' | 'error' | 'info' | 'question',
        message: string,
        background: string = '#191c24',
        color: string = '#ffffff',
        position?: 'top' | 'center' | 'bottom',
        timer?: number
    ) {
        return Swal.fire({
            icon: type,
            html: message,
            position: position ?? 'center',
            timer,
            background,
            color
        });
    }
}
