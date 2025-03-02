export interface SignupProps {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string | File;
  contactNumber: string;
}

export interface SigninProps {
  email: string;
  password: string;
}

export interface ResponseProps {
  data:{
    access_token: string
  }
}
