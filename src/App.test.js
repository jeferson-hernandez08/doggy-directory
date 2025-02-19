import { render, screen } from "@testing-library/react";
import App from "./App";


//Testeo de verificación de una cadena de caracteres 'Doggy Directory'  (Harold Jaramillo Villa)

test("Debe contener 'Doggy Directory'", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
});

//testeo de rederizado de botón (Hector Jimenez Lopez)

test("test render of the button", () => {
  render(<App />);

  expect(screen.getByRole("button")).toBeInTheDocument();

});

//Testeo de verificación de clase (Juan Felipe Ospina)
test('Clase del H1',()=> {
  render(<App />);
  const titulo= screen.getByRole('heading',{name: 'Doggy Directory 🐶'});
  expect(titulo).toHaveClass('mt-4 mb-5');
});

//Testeo en el selector option (Jeferson Hernandez)
test("test render, select option", () => {
  render(<App />);

  expect(screen.getByRole("option")).toBeInTheDocument();

});

//Testeo de verificacion texto Button (Sebastián Valencia G)
test("Content button", () => {
  render(<App />);

  expect(screen.getByRole("button")).toHaveTextContent("Search");
});

//Prueba de tipo de contenido a un elemento -Alexis C.
test("typeof of search results counter", () => {
  expect(typeof ("fs-5")).toBe("string");
});

//Testeo de renderizado de la imagen(Maria Camila Betancourth)

test("test render, en la imagen", () => {
render(<App/>);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

//testeo de renderizado de botón (Camila Arciniegas)
test("test render , en el funcionamiento main", () => {
  render(<App />);

  expect(screen.getByRole("main")).toBeInTheDocument();

});

