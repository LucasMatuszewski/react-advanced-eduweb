import React from "react";
import { render, fireEvent } from "@testing-library/react";

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

  it("displays proper label and value", () => {
    const { getByLabelText } = render(<Input name="Name" label="Name" />);
    const input = getByLabelText(/name/i);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Roman" } });
    expect(input).toHaveValue("Roman");
  });

  it("removes numbers from passed value", () => {
    const { getByLabelText } = render(<Input name="Name" label="Name" />);
    const input = getByLabelText(/name/i);

    fireEvent.change(input, { target: { value: "roman123-roman!" } });
    expect(input).toHaveValue("roman-roman!");
  });
});
