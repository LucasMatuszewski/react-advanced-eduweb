// Article from Kent C. Dodds as inspiration: https://kentcdodds.com/blog/test-isolation-with-react

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Input from "./Input";

const renderInput = (props) => {
  const utils = render(<Input name="name" label="name" {...props} />);
  const input = utils.getByLabelText(/name/i);
  return { ...utils, input };
};

describe("Input component", () => {
  it("Renders input element with placeholder from props", () => {
    const placeholderText = "Type Your Name";
    // getByTestId & getByPlaceholderText are QUERIES from React Testing Library:
    // https://testing-library.com/docs/dom-testing-library/api-queries
    const { getByTestId, getByPlaceholderText } = renderInput({
      placeholder: placeholderText,
    });

    // toBeInTheDocument is a Matcher from Jest DOM:
    // https://github.com/testing-library/jest-dom#custom-matchers
    expect(getByTestId("sample-input")).toBeInTheDocument();
    // Below regex to find string case Insensitive (i):
    expect(getByPlaceholderText(/Type your name/i)).toBeInTheDocument();
  });

  it("Renders input element with default placeholder", () => {
    const { getByPlaceholderText } = renderInput();
    expect(getByPlaceholderText("Default placeholder")).toBeInTheDocument();
  });

  it("displays proper label and value", () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Roman" } });
    expect(input).toHaveValue("Roman");
  });

  it("removes numbers from passed value", () => {
    const { input } = renderInput();

    fireEvent.change(input, { target: { value: "roman123-roman!" } });
    expect(input).toHaveValue("roman-roman!");
  });

  it("displays error ONLY when digits are passed", () => {
    const { input, getByText, container } = renderInput();

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
