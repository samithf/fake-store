import { getCategories } from "@/db/queries";
import { filter } from "@/actions/filter";
import SubmitOnSelect from "./submit-on-select";
import { Select } from "./ui/select";

interface CategoryFilterProps {
  category?: string;
}

export async function CategoryFilter({
  category = "all",
}: CategoryFilterProps) {
  const categories = await getCategories();

  return (
    <form id="category-filter-form" action={filter}>
      <Select
        options={categories}
        id="category"
        name="category"
        selectedValue={category}
      />
      <SubmitOnSelect formId="category-filter-form" selectId="category" />
    </form>
  );
}
