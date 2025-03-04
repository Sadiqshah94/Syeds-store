import CategoryForm from "@/modules/Dashboard/categories/CategoryForm";

const Category = ({
  setSheetOpen,
}: {
  setSheetOpen: (open: boolean) => any;
}) => {
  return (
    <div>
      <CategoryForm setSheetOpen={setSheetOpen} />
    </div>
  );
};

export default Category;
