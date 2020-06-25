import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input component", () => {
  it("Renders input element with placeholder from props", () => {
    const placeholderText = "Type Your Name";
    // getByTestId & getByPlaceholderText are QUERIES from React Testing Library:
    // https://testing-library.com/docs/dom-testing-library/api-queries
    const { getByTestId, getByPlaceholderText } = render(
      <Input placeholder={placeholderText} />
    );

    // toBeInTheDocument is a Matcher from Jest DOM:
    // https://github.com/testing-library/jest-dom#custom-matchers
    expect(getByTestId("sample-input")).toBeInTheDocument();
    // Below regex to find string case Insensitive (i):
    expect(getByPlaceholderText(/Type your name/i)).toBeInTheDocument();
  });

  it("Renders input element with default placeholder", () => {
    const { getByPlaceholderText } = render(<Input />);
    expect(getByPlaceholderText("Default placeholder")).toBeInTheDocument();
  });
});
