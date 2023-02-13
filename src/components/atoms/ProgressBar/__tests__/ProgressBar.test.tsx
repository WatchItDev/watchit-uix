import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  test('se renderiza correctamente con el porcentaje especificado', () => {
    const percentage = 50;
    render(<ProgressBar percentage={percentage} />);
    const progressBar = screen.getByTestId('progress-bar-content');
    expect(progressBar).toHaveStyle(`width: ${percentage}%`);
  });

  test('se renderiza correctamente con el color de fondo especificado', () => {
    const backgroundColor = '#000000';
    render(<ProgressBar percentage={50} backgroundColor={backgroundColor} />);
    const progressBarBackground = screen.getByTestId('progress-bar-background');
    expect(progressBarBackground).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  test('se renderiza correctamente con el color de barra especificado', () => {
    const barColor = '#ffffff';
    render(<ProgressBar percentage={50} barColor={barColor} />);
    const progressBarContent = screen.getByTestId('progress-bar-content');
    expect(progressBarContent).toHaveStyle(`background-color: ${barColor}`);
  });

  test('muestra la bola si se especifica el valor "showBullet"', () => {
    render(<ProgressBar percentage={50} showBullet={true} />);
    const progressBarBall = screen.getByTestId('progress-bar-ball');
    expect(progressBarBall).toBeInTheDocument();
  });

  test('no muestra la bola si no se especifica el valor "showBullet"', () => {
    render(<ProgressBar percentage={50} showBullet={false} />);
    const progressBarBall = screen.queryByTestId('progress-bar-ball');
    expect(progressBarBall).toBeNull();
  });
});
