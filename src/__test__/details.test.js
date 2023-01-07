import React from 'react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { waitFor, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Details from '../component/Details';

const mockDetails = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockDetails,
  }),
  useLocation: () => ({
    pathname: '/details',
    state: { name: 'Kucoin' },
  }),
}));

it('Testing Details component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  );
  waitFor(() => expect(screen.getAllByText(/Kucoin/)).toBeInTheDocument());
});
