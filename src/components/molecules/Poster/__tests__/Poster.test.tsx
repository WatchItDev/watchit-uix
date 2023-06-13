import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Poster } from '../Poster';

describe('Poster component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Poster img='image.jpg' title='Title' />);
    const wrapper = getByTestId('poster-wrapper');
    const image = getByTestId('poster-image');

    expect(wrapper).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  test('call onClick prop', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Poster img='image.jpg' title='Title' onClick={onClick} />);
    const wrapper = getByTestId('poster-image');

    fireEvent.click(wrapper);
    expect(onClick).toHaveBeenCalled();
  });

  test('render correctly with default props', () => {
    const { getByTestId } = render(<Poster img='image.jpg' title='Title' />);
    const wrapper = getByTestId('poster-wrapper');

    expect(wrapper).toHaveStyle('pointer-events: none');
  });

  test('render correctly with size prop', () => {
    const { getByTestId } = render(<Poster img='image.jpg' title='Title' size={{ width: 100, height: 150 }} />);
    const wrapper = getByTestId('poster-wrapper');

    expect(wrapper).toHaveStyle('width: 100px');
    expect(wrapper).toHaveStyle('height: 150px');
  });

  test('render correctly without progress', () => {
    const { queryByTestId } = render(<Poster img='image.jpg' title='Title' />);
    const progressBar = queryByTestId('progress-bar');

    expect(progressBar).toBeNull();
  });
});
