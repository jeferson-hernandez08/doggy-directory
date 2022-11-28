import { render, screen } from "@testing-library/react";
import App from "./App";


// Testeo de verificación de una cadena de caracteres 'Doggy Directory'  (Harold Jaramillo Villa)

test("Debe contener 'Doggy Directory'", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
});
