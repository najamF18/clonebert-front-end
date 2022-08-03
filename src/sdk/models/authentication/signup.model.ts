export class SignupModel {
    public FirstName: string | null = null;
    public LastName: string | null = null;
    public Email: string | null = null;
    public Password: string | null = null;
    public ConfirmPassword: string | null = null;
    public Newsletter: boolean | null = true;
    public HowFindUs: string | null = null;
    public RoleInIndustry: string | null = null;
    public PrimaryUse: string | null = null;
    public PhoneNumber: number | null = null;

    constructor(data?: Partial<SignupModel>) {
        Object.assign(this, data);
    }
}
