import React from "react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

export type LoadingButtonProps = ButtonProps & {
  loadingText?: string;
};

export const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  LoadingButtonProps
>(({ isLoading = false, children, loadingText, ...props }, ref) => (
  <Button ref={ref} isLoading={isLoading} {...props}>
    {isLoading && loadingText ? loadingText : children}
  </Button>
));

LoadingButton.displayName = "LoadingButton";
