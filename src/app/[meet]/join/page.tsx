"use client";
import { Spinner } from "@material-tailwind/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Join({
  params: { meet },
}: {
  params: { meet: string };
}) {
  const searchParams = useSearchParams();

  const router = useRouter();
  const uuid = searchParams.get("uuid");
  const cnmQuery = searchParams.get("cnm");
  const jnmQuery = searchParams.get("jnm");

  React.useEffect(() => {
    if (cnmQuery) {
      router.push(`/${meet}?uuid=${uuid}&rl=mdr`);
    }
    if (jnmQuery) {
      router.push(`/${meet}?uuid=${uuid}&rl=ptc`);
    }
    return () => {};
  }, []);

  return (
    <section className="flex items-center justify-center h-screen w-screen bg-secondary-100 gap-x-4">
      <Spinner
        color="blue"
        className="h-8 w-8"
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
      />
      <span className="text-4xl font-semibold text-primary-white">
        Loading...
      </span>
    </section>
  );
}
