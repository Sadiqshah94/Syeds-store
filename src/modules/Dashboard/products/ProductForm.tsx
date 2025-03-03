import Uploader from "@/components/ui/core/UploadeFile";
import {
  Button,
  CardHeader,
  CardTitle,
  InputField,
  Spinner,
} from "@/modules/auth";
import useAddProduct from "../hooks/useAddProduct";
import { useGetAllCategoriesQuery } from "@/store/services/dashboard/categories";

export default function ProductForm({
  setSheetOpen,
}: {
  setSheetOpen: (open: boolean) => any;
}) {
  const { formik, isLoading } = useAddProduct({ setSheetOpen });
  const { values, errors, handleChange, touched, handleSubmit, setFieldValue } =
    formik;

  // Fetch categories from API
  console.log(values,errors)
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategoriesQuery();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardHeader className="flex flex-row items-center justify-center gap-2">
        <CardTitle className="font-bold text-2xl">Add Product</CardTitle>
      </CardHeader>

      {/* Product Title */}
      <InputField
        label="Title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        error={touched.title && Boolean(errors.title)}
        helperText={touched.title && errors.title}
      />

      {/* Price */}
      <InputField
        label="Price"
        name="price"
        type="number"
        value={values.price}
        onChange={handleChange}
        error={touched.price && Boolean(errors.price)}
        helperText={touched.price && errors.price}
      />

      {/* Description */}
      <InputField
        label="Description"
        name="description"
        type="text"
        value={values.description}
        onChange={handleChange}
        error={touched.description && Boolean(errors.description)}
        helperText={touched.description && errors.description}
      />

      {/* Category Dropdown */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category.id"
          value={values.category?.id || ""}
          onChange={(e) => {
            const selectedCategory = categories?.find(
              (cat: any) => cat.id === Number(e.target.value)
            );
            setFieldValue("category", selectedCategory || {});
          }}
          className="block w-full p-2 mt-1 border rounded-md"
        >
          <option value="">Select a category</option>
          {categoriesLoading ? (
            <option disabled>Loading...</option>
          ) : (
            categories?.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          )}
        </select>
        {touched.category?.id && errors.category?.id && (
          <p className="text-red-500 text-sm">{errors.category?.id}</p>
        )}
      </div>


      {/* Product Images */}
      <Uploader
        label="Product Images"
        name="images"
        value={values?.images}
        multiple="true"
        onChange={handleChange}
        helperText={touched.images && errors.images}
      />

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <Spinner /> : "Add Product"}
      </Button>
    </form>
  );
}
