import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu, { MenuProps } from '../Menu';

const setup = (props: MenuProps) => {
	const component = render(<Menu {...props} />);
	return { ...component };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			active: 'true',
			isOpen: true,
			items: []
		});
	});
});
