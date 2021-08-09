import { render, screen } from "@testing-library/react";
import App from "./App";

test("all component rendered correctly", () => {
  render(<App />);
  // screen.debug()

  const appTitle = screen.getByText(/search gif/i);
  const searchButton = screen.getByText("Search");
  const searchBox = screen.getByTestId("search-box")
  const homeNavLink = screen.getByText("Home");
  const trendingNavLink = screen.getByText("Trending");

  expect(appTitle).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(homeNavLink).toBeInTheDocument();
  expect(trendingNavLink).toBeInTheDocument();
  expect(searchBox).toBeInTheDocument();
});
