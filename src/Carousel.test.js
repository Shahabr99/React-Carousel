import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
  const {asFragment} = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot()
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


it("should work on click on the left arrow", function() {
  const component = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>)
  const leftArrow = component.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow)

  expect(component.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
  expect(component.querySelector('img[alt="testing image 3"]')).toBeInTheDocument();
})