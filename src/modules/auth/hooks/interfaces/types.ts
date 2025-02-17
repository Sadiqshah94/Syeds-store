export interface SignupProps {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string | File;
}

export interface SigninProps {
  email: string;
  password: string;
}
