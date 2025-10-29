import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "../components/Button";
import React from "react";

import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders children correctly", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  it("applies correct variant classes", () => {
    const { getByRole } = render(<Button variant="primary">Primary</Button>);
    const button = getByRole("button");
    expect(button.className).toContain("bg-blue-600");
  });

  it("shows loading state correctly", () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    const button = getByRole("button");
    expect(button.disabled).toBe(true);
    expect(button.querySelector("svg")).toBeTruthy();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
