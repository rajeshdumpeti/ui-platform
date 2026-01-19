import React from "react";
import { Input } from "./Input";
import type { InputProps } from "./Input";

export interface DatePickerProps extends Omit<InputProps, "type"> {}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => <Input ref={ref} type="date" {...props} />
);

DatePicker.displayName = "DatePicker";
