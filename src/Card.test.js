import React from 'react';
import Card from './Card';
import {render} from "@testing-library/react";

it("should render without failure", function() {
  const props = {
    caption: 'Sample Caption',
    src: 'sample-image.jpg',
    currNum: 1,
    totalNum: 3,
  };
  render(<Card {...props}/>)
})

it('Should render the Card', () => {
  
  const { asFragment } = render(<Card />);

  expect(asFragment()).toMatchSnapshot();
})