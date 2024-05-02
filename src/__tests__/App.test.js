// App.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "../components/App.js"; // Adjust the path according to the location of App.js
import user from "../data/user.js";

jest.mock("../data/user", () => ({
  __esModule: true,
  default: {
    name: "Liza",
    bio: "I made this!",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  },
}));

test("renders user information", () => {
  const { name, bio, links } = user;
  render(<App name={name} bio={bio} links={links} />);

  const h1 = screen.getByText(name);
  expect(h1).toBeInTheDocument();

  const p = screen.getByText(bio);
  expect(p).toBeInTheDocument();

  const githubLink = screen.getByText("GitHub");
  expect(githubLink).toHaveAttribute("href", links.github);

  const linkedinLink = screen.getByText("LinkedIn");
  expect(linkedinLink).toHaveAttribute("href", links.linkedin);
});
