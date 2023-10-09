import { render, screen } from "@testing-library/react"
import React from "react"
import App from "../../App"

test('render without errors', () => {
      render(<App />)
}) 

test('when app mounts, Add New Animal header exists on screen', () => {
      //ARANGE
      render(<App />);
      //ACT
      const header = screen.getByText('Add New Animal')
      //ASSERT
      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent(/add new animal/i)
})