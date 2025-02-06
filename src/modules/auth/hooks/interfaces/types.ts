
export interface SignupProps{
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
}

export interface SigninProps {
    email: string;
    password: string;
    access_token: string;
}