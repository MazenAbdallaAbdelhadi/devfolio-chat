import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

import { Form } from "@/components/ui/form";


interface Props<T extends FieldValues> extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
  handleSubmit: SubmitHandler<T>;
};

export function FormProvider<T extends FieldValues>({
  children,
  methods,
  handleSubmit,
  ...props
}: Props<T>) {
  return (
    <Form {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </form>
    </Form>
  );
}
