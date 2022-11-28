import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);
});

//Alexis C. Prueba de tipo de contenido a un elemento
test("typeof of search results counter", () => {
  expect(typeof ("fs-5")).toBe("string");
});