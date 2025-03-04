import Uploader from "@/components/ui/core/UploadeFile";
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
  useSignUp,
} from "./index";

export default function SignupForm() {
  const { CreateUser, isLoading } = useSignUp();
  const { values, errors, handleChange, touched, handleSubmit } = CreateUser;
  return (
    <Card className="max-w-md mx-auto mt-10 p-3 shadow-lg">
      <CardHeader className="  justify-center gap-2 flex flex-row items-center">
        <CardTitle className="font-bold text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            {/* <div className="flex flex-col gap-2 sm:flex-wrap sm:space-x-4"> */}
            <div>
              <div className="w-full">
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  value={values?.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </div>

              <div className="w-full ">
                <InputField
                  label="Email"
                  name="email"
                  type="text"
                  value={values?.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </div>

            <div>
              <div className="w-full">
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
              <div className="w-full">
                <InputField
                  label="Contact Number"
                  name="contactNumber"
                  type="text"
                  value={values?.contactNumber}
                  onChange={handleChange}
                  error={touched.contactNumber && Boolean(errors.contactNumber)}
                  helperText={touched.contactNumber && errors.contactNumber}
                />
              </div>
            </div>
          </div>

          <div>
            <Uploader
              label="Avatar"
              name="avatar"
              onChange={handleChange}
              // helperText={touched.avatar && errors.avatar}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Sign Up"}
          </Button>
          <div>
            <Label className="flex gap-2">
              Do you have already account?
              <NavLink to="/">Login</NavLink>
            </Label>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
