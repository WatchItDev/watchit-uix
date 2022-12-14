import React from 'react';
import { addDecorator } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { darkTheme } from "../src/styles/theme";

addDecorator((story) => (
  <ThemeProvider theme={createTheme(darkTheme)}>{story()}</ThemeProvider>
));

export const parameters = {
	backgrounds: {
		default: 'default',
		values: [
			{
				name: 'default',
				value: '#212328',
			}
		],
	},
}