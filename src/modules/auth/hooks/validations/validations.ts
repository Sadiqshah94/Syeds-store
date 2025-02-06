import * as Yup from "yup";

export const SignupValidation = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  role: Yup.string().required(),
  avatar: Yup.string()
    .url("Invalid URL format")
    .matches(/\.(jpg|png|svg)$/i, "Avatar must be a .jpg, .png, or .svg image")
    .required("Avatar is required"),
});

export const SignInValidations = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
