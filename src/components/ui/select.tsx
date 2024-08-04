"use client";

import { Select as FlowbiteSelect } from "flowbite-react";

export interface SelectProps {
  options: string[];
  name: string;
  id: string;
  selectedValue: string;
}

export function Select({ options, name, id, selectedValue }: SelectProps) {
  return (
    <FlowbiteSelect
      id={id}
      name={name}
      className="w-[200px]"
      onChange={() => null}
      value={selectedValue}
    >
      <option value="all">All</option>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </FlowbiteSelect>
  );
}
