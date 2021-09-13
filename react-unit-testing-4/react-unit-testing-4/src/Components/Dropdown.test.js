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
});
