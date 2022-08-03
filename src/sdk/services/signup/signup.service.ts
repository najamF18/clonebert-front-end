import { ServiceClass } from '@/decorators';
import { SignupModel } from '@/sdk/models';
import { BehaviorSubject } from 'rxjs';

@ServiceClass()
export class SignupService {
    public Signup = new BehaviorSubject(new SignupModel());
}
