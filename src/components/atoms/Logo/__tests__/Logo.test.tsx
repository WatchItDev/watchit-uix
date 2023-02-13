import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Logo } from '../logo';

describe('Logo component', () => {
  it('should render the logo svg', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('logo-svg');
    expect(logo).toBeInTheDocument();
  });

  it('should have the correct width when size prop is provided', () => {
    const size = 100;
    const { getByTestId } = render(<Logo size={size} />);
    const logo = getByTestId('logo-wrapper');
    expect(logo).toHaveStyle(`width: ${size}px`);
  });

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Logo onClick={onClick} />);
    const logo = getByTestId('logo-svg');
    fireEvent.click(logo);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not throw an error when onClick is not provided', () => {
    expect(() => {
      render(<Logo />);
    }).not.toThrow();
  });
});
