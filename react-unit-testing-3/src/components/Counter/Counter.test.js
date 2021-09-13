import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Testing Counter Component", () => {
  test("When we start the app, the counter should have the value of 0", () => {
    // Given ...
    // ... a 'Counter' on the app startup
    const wrapper = render(<Counter />);

    // When ...
    // ... we fetch all the Counters
    const counterTitle = wrapper.container.querySelector("#counter");

    // Then ...
    // ... we expect it to exist
    // ... we expect it only to have one
    // ... we expect it to have the value '0'
    expect(counterTitle).toHaveTextContent("0");
  });

  test("When we start the app,the title should contain the class counter__title", () => {
    // Given ...
    // ... a 'Counter' on the app startupcl
    const result = render(<Counter />);

    // When ...
    // ... we fetch all the Counters
    const counterTitle = result.container.querySelector("#counter");

    // Then ...
    // ... we expect it to be the type of counter__title
    expect(counterTitle).toHaveClass("counter__title");
  });

  test("When we start the app,the title should not contain the classes counter__title--increment and counter__title--decrement", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("Have Increment Button", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  test("Increment Button has the classes of button e button--increment", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(buttonIncrement).toHaveClass("button");
    expect(buttonIncrement).toHaveClass("button--increment");
  });

  test("Have Decrement button", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(buttonDecrement).toBeInTheDocument();
  });

  test("Decrement Button has the classes of button e button--increment", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(buttonDecrement).toHaveClass("button");
    expect(buttonDecrement).toHaveClass("button--decrement");
  });

  test("Should decrement 1 when click in the button decrement", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Should decrement - 1 when click in the button decrement", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("Should had the class counter__title--decrement on the title when the value is > 0", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("Should had the class counter__title--decrement on the title when the value is < 0", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});
