import { render, screen } from "@testing-library/react"
import AboutUs from "../Pages/AboutUs"
import "@testing-library/jest-dom"

test("should render aboutUs page",()=>{
  render(<AboutUs/>)
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
})