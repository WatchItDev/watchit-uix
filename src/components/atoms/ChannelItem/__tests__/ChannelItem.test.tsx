import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChannelItem from '../ChannelItem';

describe('ChannelItem', () => {
  it('should render a letter inside the square', () => {
    const { getByText } = render(<ChannelItem innerLetter="A" />);
    expect(getByText('A')).toBeInTheDocument();
  });

  it('should call the onClick prop when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<ChannelItem innerLetter="A" onClick={onClick} />);
    fireEvent.click(getByTestId('channel-item-wrapper'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should have a different background color when selected', () => {
    const { getByTestId } = render(<ChannelItem innerLetter="A" selected />);
    const channelItemWrapper = getByTestId('channel-item-wrapper');
    expect(channelItemWrapper).toHaveStyle('background-color: rgba(209,210,211,1)');
  });

  it('should have a different font size when innerLetterSize is changed', () => {
    const { getByTestId } = render(<ChannelItem innerLetter="A" innerLetterSize={60} />);
    const channelItemContent = getByTestId('channel-item-content');
    expect(channelItemContent).toHaveStyle('font-size: 60px');
  });
});
