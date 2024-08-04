import { Button, Select } from "flowbite-react";
import { getCategories } from "@/db/queries";
import { filter } from "@/actions/filter";
import SubmitOnSelect from "./submit-on-select";

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
        id="category"
        name="category"
        className="w-[200px]"
        value={category}
      >
        <option value="all">All</option>
        {categories.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <SubmitOnSelect formId="category-filter-form" selectId="category" />
    </form>
  );
}
