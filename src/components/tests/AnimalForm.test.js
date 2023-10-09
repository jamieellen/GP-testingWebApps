import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import AnimalForm from "../AnimalForm";
import userEvent from "@testing-library/user-event";

test('renders without errors', () => {
      render(<AnimalForm />)
})

test('all feilds filled + user submits = species in list', () => {
      //ARRANGE
      render(<AnimalForm />);
      const species = 'feline';
      //ACT
      const speciesInput = screen.getByLabelText(/species:/i);
      userEvent.type(speciesInput, species);
      const ageInput = screen.getByLabelText(/age:/i);
      userEvent.type(ageInput, '9');
      const notesInput = screen.getByLabelText(/notes:/i);
      userEvent.type(notesInput, 'Testing');
      const submitButton = screen.getByRole('button');
      userEvent.click(submitButton);
      //ASSERT
      await waitFor(() => {
            const speciesFeedback = screen.queryByText(species);
            expect(speciesFeedback).toBeInTheDocument();
      })

})