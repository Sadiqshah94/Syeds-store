import { SigninProps, SignupProps } from "../interfaces/types";

export const SignUpInitialValues: SignupProps = {
  name: "",
  email: "",
  password: "",
  role: "",
  avatar:"",
};

export const SigninInitialValues: SigninProps = {
  email: "",
  password: "",
};
