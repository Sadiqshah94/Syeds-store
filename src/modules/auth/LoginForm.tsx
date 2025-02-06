import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  Label,
  Lock,
  NavLink,
  Spinner,
  useEffect,
  useNavigate,
  userSignIn,
} from "./index";

export default function SignInForm() {
  const { SignInUser, isLoading, data } = userSignIn();
  console.log(data);
  const { values, errors, handleChange, touched, handleSubmit } = SignInUser;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/dashboard");
    }
  }, [data, navigate]);

  return (
    <div className="p-5 flex items-center justify-center min-h-screen">
      <Card className="p-5 w-full max-w-lg mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className=" justify-center gap-2 flex items-center">
            <Lock className="text-gray-500" />
            Sign In
          </CardTitle>
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Spinner/> : "Sign In"}
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
