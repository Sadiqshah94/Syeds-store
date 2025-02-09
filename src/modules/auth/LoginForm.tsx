import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  Label,
  NavLink,
  Spinner,
  userSignIn,
  AppImages,
  useSelector,
  RootState,
} from "./index";

export default function SignInForm() {
  const { SignInUser } = userSignIn();
  const { values, errors, handleChange, touched, handleSubmit } = SignInUser;
  const {loading} = useSelector((state: RootState) => state?.auth);
  return (
    <div className="p-5 flex items-center justify-center min-h-screen">
      <Card className="p-5 w-full max-w-lg mx-auto shadow-lg">
        <CardHeader className=" justify-center gap-2 flex flex-col items-center">
          <img src={AppImages.logo} className="w-20 h-20 contain" />
          <CardTitle className="font-bold text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <InputField
                label="Email"
                name="email"
                type="email"
                value={values?.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </div>

            <div>
              <InputField
                label="Password"
                name="password"
                type="password"
                value={values?.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </div>
            <Button type="submit" className="w-full"
             disabled={loading} 
            >
              {loading ? <Spinner /> : "Sign In"}
            </Button>
            <div>
              <Label className="flex gap-2">
                if you do not have account?
                <NavLink to="/register">Register</NavLink>
              </Label>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
