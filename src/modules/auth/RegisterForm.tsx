import {
  AppImages,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  Label,
  NavLink,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
  useSignUp,
} from "./index";

export default function SignupForm() {
  const { CreateUser, isLoading } = useSignUp();
  const { values, errors, handleChange, touched, handleSubmit } = CreateUser;
  return (
    <Card className="max-w-lg mx-auto mt-10 p-5 shadow-lg">
      <CardHeader className=" justify-center gap-2 flex flex-col items-center">
        <img src={AppImages.logo} className="w-20 h-20 contain" />
        <CardTitle className="font-bold text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
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

          <div>
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

          <div>
            <Label htmlFor="role">Role</Label>
            <Select
              value={values.role}
              name="role"
              onValueChange={(value) =>
                handleChange({ target: { name: "role", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="customer">User</SelectItem>
              </SelectContent>
            </Select>
            {touched.role && errors.role && (
              <div className="text-red-500 text-sm">{errors.role}</div>
            )}
          </div>

          <div>
            <InputField
              type="url"
              accept="image/*"
              label="Avatar"
              name="avatar"
              onChange={handleChange}
              error={touched.avatar && Boolean(errors.avatar)}
              helperText={touched.avatar && errors.avatar}
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
