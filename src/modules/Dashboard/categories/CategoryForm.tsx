import Uploader from "@/components/ui/core/UploadeFile";
import useAddCategory from "../hooks/userAddCategory";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  NavLink,
  Spinner,
} from "@/modules/auth";
import { Label } from "@radix-ui/react-label";

export default function CategoryForm() {
  const { formik, isLoading } = useAddCategory();
  const { values, errors, handleChange, touched, handleSubmit } = formik;

  return (
    <Card className="max-w-md mx-auto mt-10 p-3 shadow-lg">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-center gap-2">
        <CardTitle className="font-bold text-2xl">Add Category</CardTitle>
      </CardHeader>

      {/* Form */}
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="w-full">
            <InputField
              label="Name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </div>

          {/* Image Upload */}
          <div>
            <Uploader
              label="Image"
              name="image"
              value={values.image} // Ensure value is controlled
              onChange={handleChange}
              helperText={touched.image && errors.image}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Add Category"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
