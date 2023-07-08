import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenuItem, { MobileMenuItemProps } from '../MobileMenuItem';

const setup = (props: MobileMenuItemProps) => {
	const component = render(<MobileMenuItem {...props} />);
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
