import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Component } from "./Component";

test("some test", () => {
  const { container } = render(<Component />);

  expect(container.textContent).toBe("Hello!");
});
