"use client";
import * as React from "react";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <p className="text-red-400">
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </p>
  );
}
const TanStack = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl pb-8">Tanstack form without Zod</h1>


      <form
        className="flex flex-col gap-4 lg:max-w-[30rem] w-full"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        >
        <div className="flex flex-col gap-2">
          {/* A type-safe field component*/}
          <form.Field
            name="firstName"
            validators={{
              onChange: ({ value }) =>
                !value
              ? "A first name is required"
              : value.length < 3
              ? "First name must be at least 3 characters"
              : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}>

            {(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className="flex flex-col gap-2">
                  <label htmlFor={field.name}>First Name:</label>
                  <input
                    className="border border-gray-300 rounded-md p-2 text-stone-400"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    />
                  <FieldInfo field={field} />
                </div>
              );
            }}
            </form.Field>
        </div>


        <div className="flex flex-col gap-2">
          <form.Field
            name="lastName"
            validators={{
              onChange: ({ value }) =>
                !value
              ? "A last name is required"
              : value.length < 3
              ? "Last name must be at least 3 characters"
              : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            >

            {(field) => (
              <>
                <label htmlFor={field.name}>Last Name:</label>
                <input
                  className="border border-gray-300 rounded-md p-2 text-stone-400"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  />
                <FieldInfo field={field} />
              </>
            )}
            </form.Field>
        </div>

        <div className="flex flex-col gap-2">
          {/* A type-safe field component*/}
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value
              ? "An email is required"
              : !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value)
              ? "Invalid email format"
              : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            >
            {(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className="flex flex-col gap-2">
                  <label htmlFor={field.name}>Email:</label>
                  <input
                    className="border border-gray-300 rounded-md p-2 text-stone-400"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    />
                  <FieldInfo field={field} />
                </div>
              );
            }}
            </form.Field>
        </div>


        <div className="flex flex-col gap-2">
          {/* A type-safe field component*/}
          <form.Field
            name="message"
            validators={{
              onChange: ({ value }) =>
                !value
              ? "A message is required"
              : value.length < 10
              ? "Message must be at least 10 characters"
              : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            >

            {(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className="flex flex-col gap-2">
                  <label htmlFor={field.name}>Message:</label>
                  <input
                    className="border border-gray-300 rounded-md p-2 text-stone-400"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    />
                  <FieldInfo field={field} />
                </div>
              );
            }}
            </form.Field>
        </div>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}>

          {([canSubmit, isSubmitting]) => (
            <button
            type="submit"
            className="hover:translate-0.5 hover:cursor-pointer bg-button text-white p-2 rounded-md disabled:opacity-40"
            disabled={!canSubmit}
            >
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
          </form.Subscribe>
      </form>
        
    </div>
  );
};

export default TanStack;
