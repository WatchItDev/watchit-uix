import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChannelsMenu, { ChannelsMenuProps } from '../ChannelsMenu';

const setup = (props: ChannelsMenuProps) => {
	const component = render(<ChannelsMenu {...props} />);
	return { ...component };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			title: 'Item'
		});
	});
});
