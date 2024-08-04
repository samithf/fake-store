"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "flowbite-react";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button color="gray" onClick={handleGoBack}>
      <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
    </Button>
  );
}
