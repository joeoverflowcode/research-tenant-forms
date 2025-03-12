import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-4 w-full items-center text-center">
      <h1 className="text-3xl font-bold pb-1">Tanstack Form Research</h1>
      <h2 className="text-lg">Team Lindsey-Claire-Danny</h2>
      <p className="pb-10">Presenter: Joe Aguado</p>

      <p className="pb-12">
        Below are two forms with the same fields and submit button. <br/>
        View on desktop, open console and demo each form to see which technology is preferred. <br/>
        Hit submit to see data in console.
      </p>
      <div className="flex justify-center gap-4">
        <Link className="underline" href="/tanstack">
          No-Zod Form
        </Link>
        <Link className="underline" href="/zod">
          Zod Form
        </Link>
      </div>
    </div>
  );
};

export default page;
