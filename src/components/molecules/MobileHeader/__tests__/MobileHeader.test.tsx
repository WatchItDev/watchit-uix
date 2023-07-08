import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileHeader, { MobileHeaderProps } from '../MobileHeader';

const setup = (props: MobileHeaderProps) => {
	const component = render(<MobileHeader {...props} />);
	return { ...component };
};

describe('MobileMenuItem', () => {
	it('renders without crashing', () => {
		setup({
			title: 'Item'
		});
	});
});
