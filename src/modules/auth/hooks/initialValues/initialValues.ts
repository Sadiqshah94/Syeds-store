import { SigninProps, SignupProps } from "../interfaces/types";

export const SignUpInitialValues: SignupProps = {
  name: "",
  email: "",
  password: "",
  role: "customer",
  contactNumber:'',
  avatar:"",
};

export const SigninInitialValues: SigninProps = {
  email: "",
  password: "",
};
