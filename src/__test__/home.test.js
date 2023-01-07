import React from 'react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../component/Home';

it('Testing Home Component', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(screen.getByTestId('cryptoex')).toBeInTheDocument();
});
