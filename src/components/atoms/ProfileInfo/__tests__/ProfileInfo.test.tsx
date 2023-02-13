import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfileInfo from '../ProfileInfo';

describe('<ProfileInfo />', () => {
	afterEach(cleanup);

	test('ProfileInfo should render correctly', () => {
		const mockOnClick = jest.fn();
		const { getByTestId, getByText } = render(
			<ProfileInfo
				icon={<svg />}
				title="Title"
				subTitle="Subtitle"
				onClick={mockOnClick}
			/>
		);

		const wrapper = getByTestId('profile-info-wrapper');
		const title = getByText('Title');
		const subTitle = getByText('Subtitle');

		expect(wrapper).toBeDefined();
		expect(title).toBeDefined();
		expect(subTitle).toBeDefined();
	});

	test('ProfileInfo should call onClick when clicked', () => {
		const mockOnClick = jest.fn();
		const { getByTestId } = render(
			<ProfileInfo
				icon={<svg />}
				title="Title"
				subTitle="Subtitle"
				onClick={mockOnClick}
			/>
		);

		const wrapper = getByTestId('profile-info-wrapper');
		wrapper.click();

		expect(mockOnClick).toHaveBeenCalled();
	});
})
