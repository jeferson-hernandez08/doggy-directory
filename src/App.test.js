import { render, screen } from "@testing-library/react";
import App from "./App";


// Testeo de verificación de una cadena de caracteres 'Doggy Directory'  (Harold Jaramillo Villa)

test("Debe contener 'Doggy Directory'", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
});

//Prueba de tipo de contenido a un elemento -Alexis C.
test("typeof of search results counter", () => {
  expect(typeof ("fs-5")).toBe("string");
});