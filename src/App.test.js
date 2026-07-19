import { render, screen } from "@testing-library/react";
import App from "./App";

test("affiche le titre principal", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /Les Meilleurs Pokemon Jeux/i })
  ).toBeInTheDocument();
});
