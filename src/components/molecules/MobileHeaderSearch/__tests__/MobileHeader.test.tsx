import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileHeaderSearch, { MobileHeaderSearchProps } from '../MobileHeaderSearch';

const setup = (props: MobileHeaderSearchProps) => {
	const component = render(<MobileHeaderSearch {...props} />);
	const wrapper = component.getByTestId('mobile-header-search');
	return { ...component, wrapper };
};

/* describe('MobileHeaderSearch', () => {
	it('renders without crashing', () => {
		setup({
			icon: <svg />,
			title: 'Item'
		});
	});

	it('calls onClick function when clicked', () => {
		const onClick = jest.fn();
		const { wrapper } = setup({
			icon: <svg />,
			title: 'Item',
			onClick
		});
		fireEvent.click(wrapper);
		expect(onClick).toHaveBeenCalled();
	});

	it('renders active state correctly', () => {
		const { getByText } = setup({
			icon: <svg />,
			title: 'Item',
			active: true
		});
		const text = getByText('Item');
		expect(text).toHaveStyle('color: #D1D2D3');
	});
}); */
