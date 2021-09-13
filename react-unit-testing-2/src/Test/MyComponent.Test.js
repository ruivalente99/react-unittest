import React from 'react';
import {toBeInTheDocument,toHaveStyle} from 
  '@testing-library/jest-dom';
import { render, getByText } from '@testing-library/react';
import MyComponent from '../MyComponent';
expect.extend({ toBeInTheDocument, toHaveStyle });
const propData = {
   loading: false,
   data:[]
};
test('Test for loading state', () => {
   const logOut = jest.fn() // function mock
   render(
     <MyComponent {...propData} logOut={logOut}/>
   );
   const loadingElem = getByText('Loading');
   expect(loadingElem).toBeInTheDocument();
   expect(loadingElem).toHaveStyle(`color:green`);
});