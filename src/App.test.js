import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("<App /> - Renders Heading", () => {
  const { getByText } = render(<App />);
  const heading = getByText("Georgie's Beer Favorites");
  expect(heading).toBeInTheDocument();
});
