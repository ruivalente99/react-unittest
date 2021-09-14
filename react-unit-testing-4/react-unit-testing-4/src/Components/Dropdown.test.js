/*
 * React Testing Library
 */
import Dropdown from "./Dropdown";
import { screen, render, userEvent } from "../tests/";

const title = "Select a Pokemon";
const options = ["Bulbasaur", "Squirtle", "Charmender", "Mew"];

/*
 * Given an Dropdown item
 */
describe("Dropdown", () => {
  /*
   * When its closed
   */
  it("Should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    /*
     * Then the options should not appear
     */
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();
  });
  /*
   * When it is open
   */
  it("Should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
    /*
     * Then the options should not appear
     */
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();

    const DropdownButton = screen.getByRole("button");
    userEvent.click(DropdownButton);

    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[3] })
    ).toBeInTheDocument();
  });

  /*
   * When it is open and we click on of the options, it should close and show the select option
   */
  it("Should show the select option and close dropdown", () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);
    const DropdownButton = screen.getByRole("button");
    userEvent.click(DropdownButton);
    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[3] })
    ).toBeInTheDocument();
    const MenuItem = screen.getByRole("menuitem", { name: options[0] });
    userEvent.click(MenuItem);
    expect(onSelect).toHaveBeenCalledWith(options[0]);
    expect(screen.queryByText([options[1]])).not.toBeInTheDocument();
    expect(screen.queryByText([options[2]])).not.toBeInTheDocument();
  });
});
