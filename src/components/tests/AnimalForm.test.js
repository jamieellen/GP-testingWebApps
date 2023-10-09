import { render } from "@testing-library/react";
import React from "react";
import AnimalForm from "../AnimalForm";

test('renders without errors', () => {
      render(<AnimalForm />)
})