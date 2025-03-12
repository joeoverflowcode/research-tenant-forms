"use client";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ZodForm() {
  const formLabels = {
    firstName: "First name:",
    lastName: "Last name:",
    email: "Email:",
    message: "Message:",
    submit: "Submit",
  };

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    } as FormValues,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: z.object({
        firstName: z.string().min(3, "A first name is required"),
        lastName: z.string().min(3, "A last name is required"),
        email: z.string().email("Invalid email format"),
        message: z
          .string()
          .min(10, "A message is required"),
      }),
    },
  });

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <h1 className="text-2xl pb-2">Tanstack form WITH Zod</h1>
      <form
        className="flex flex-col gap-4 lg:max-w-[30rem] w-full"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="firstName">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="first name">{formLabels.firstName}</label>
              <input
                name="firstName"
                className="border border-gray-300 rounded-md p-2 text-stone-400"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p className="text-red-500" key={error?.message}>
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Field name="lastName">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">{formLabels.lastName}</label>
              <input
                name="lastName"
                className="border border-gray-300 rounded-md p-2 text-stone-400"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p className="text-red-500" key={error?.message}>
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Field
          name="email">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="email">{formLabels.email}</label>
              <input
                name="email"
                className="border border-gray-300 rounded-md p-2 text-stone-400"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                />
              {field.state.meta.errors.map((error) => (
                <p className="text-red-500" key={error?.message}>
                  {error?.message}
                </p>
              ))}
            </div>
          )}
          </form.Field>

        <form.Field
          name="message">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="message">{formLabels.message}</label>
              <input
                name="message"
                className="border border-gray-300 rounded-md p-2 text-stone-400"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p className="text-red-500" key={error?.message}>
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>
        
        <form.Subscribe
          selector={(formState) => [
            formState.canSubmit,
            formState.isSubmitting,
          ]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              className="hover:translate-0.5 hover:cursor-pointer bg-button text-white p-2 rounded-md disabled:opacity-40"
              disabled={!canSubmit || isSubmitting}
            >
              {formLabels.submit}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
