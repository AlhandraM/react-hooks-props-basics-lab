import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "../data/user";
import About from "../components/About.js"; // Assuming your component name is 'About'

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  expect(screen.queryByText("I made this")).toBeInTheDocument();
});

test("https://github.com/liza", () => {
  const { container } = render(<About links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});

test("https://www.linkedin.com/in/liza/", () => {
  const { container } = render(<About bio="" links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});
