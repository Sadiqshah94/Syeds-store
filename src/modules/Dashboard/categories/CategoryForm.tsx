import Uploader from "@/components/ui/core/UploadeFile";
import useAddCategory from "../hooks/userAddCategory";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  Spinner,
} from "@/modules/auth";

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

          <div>
            <Uploader
              label="Image"
              name="image"
              value={values?.image} 
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
