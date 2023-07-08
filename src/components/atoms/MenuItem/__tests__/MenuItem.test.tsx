import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem, { MenuItemProps } from '../MenuItem';

const setup = (props: MenuItemProps) => {
	const component = render(<MenuItem {...props} />);
	return { ...component };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			icon: <svg />,
			title: 'Item',
			id: ''
		});
	});
});
