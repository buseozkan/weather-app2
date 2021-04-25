import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { location } from '../data/forecast.json';


xit('renders weather app', () => {
  render(<App location={location} />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
