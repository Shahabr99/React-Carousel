import React from 'react';
import Card from './Card';
import {render} from "@testing-library/react";


it('Should render the Card', () => {
  const { asFragment } = render(<Card caption='whatever' src='whereever' currNum={2} totalNum={3}/>);

  expect(asFragment()).toMatchSnapshot();
})