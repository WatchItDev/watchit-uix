import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenu, { MobileMenuProps } from '../MobileMenu';

const setup = (props: MobileMenuProps) => {
	const component = render(<MobileMenu {...props} />);
	return { ...component };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			active: 'true',
			items: []
		});
	});
});
