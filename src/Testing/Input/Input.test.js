import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Input from "./Input";

describe("Input component", () => {
  it("Renders input element with placeholder from props", () => {
    const placeholderText = "Type Your Name";
    // getByTestId & getByPlaceholderText are QUERIES from React Testing Library:
    // https://testing-library.com/docs/dom-testing-library/api-queries
    const { getByTestId, getByPlaceholderText } = render(
      <Input placeholder={placeholderText} name="Name" label="Name" />
    );

    // toBeInTheDocument is a Matcher from Jest DOM:
    // https://github.com/testing-library/jest-dom#custom-matchers
    expect(getByTestId("sample-input")).toBeInTheDocument();
    // Below regex to find string case Insensitive (i):
    expect(getByPlaceholderText(/Type your name/i)).toBeInTheDocument();
  });

  it("Renders input element with default placeholder", () => {
    const { getByPlaceholderText } = render(<Input name="Name" label="Name" />);
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

  it("displays error ONLY when digits are passed", () => {
    const { getByLabelText, getByText, container } = render(
      <Input name="Name" label="Name" />
    );
    const input = getByLabelText(/name/i);

    // is error visible before event:
    expect(container).not.toHaveTextContent(/error/i);
    // expect(getByText(/error/i)).not.toBeInTheDocument(); // getByText will not work because this code is inside IF statement

    // is error visible when no numbers are passed:
    fireEvent.change(input, { target: { value: "roman" } });
    expect(container).not.toHaveTextContent(/error/i);

    // is error visible when user pass some numbers:
    fireEvent.change(input, { target: { value: "roman123-roman!" } });
    expect(container).toHaveTextContent(/error/i);

    // is error hidden when user removed numbers:
    fireEvent.change(input, { target: { value: "roman" } });
    expect(container).not.toHaveTextContent(/error/i);
  });
});
