"use client";

import { useEffect } from "react";

export default function SubmitOnSelect({
  formId,
  selectId,
}: {
  formId: string;
  selectId: string;
}) {
  useEffect(() => {
    const form = document.getElementById(formId) as HTMLFormElement;
    const select = document.getElementById(selectId);

    const handleChange = () => {
      form.requestSubmit();
    };

    select?.addEventListener("change", handleChange);

    return () => {
      select?.removeEventListener("change", handleChange);
    };
  }, [formId, selectId]);

  return null;
}
