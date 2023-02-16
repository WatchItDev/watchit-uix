// import React, {PropsWithChildren} from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import RoundProgress, {ButtonProps} from '../RoundProgress'
//
// describe('RoundProgress', () => {
//   let props: PropsWithChildren<ButtonProps>
//
//   beforeEach(() => {
//     props = {
//       variant: 'primary',
//       onClick: jest.fn()
//     }
//   })
//
//   it('should render correctly', () => {
//     const { getByText } = render(<RoundProgress {...props}>Button</RoundProgress>)
//     expect(getByText('RoundProgress')).toBeInTheDocument()
//   })
//
//   it('should call onClick function when clicked', () => {
//     const { getByText } = render(<RoundProgress {...props}>Button</RoundProgress>)
//     fireEvent.click(getByText('RoundProgress'))
//     expect(props.onClick).toHaveBeenCalled()
//   })
//
//   it('should render icon if passed', () => {
//     props.icon = <i className="fa fa-plus" />
//     const { getByTestId } = render(<RoundProgress {...props}>Button</RoundProgress>)
//     expect(getByTestId('icon')).toBeInTheDocument()
//   })
//
//   it('should not render children if none passed', () => {
//     props.children = undefined;
//     const { queryByText } = render(<RoundProgress {...props} />)
//     expect(queryByText('RoundProgress')).toBeNull()
//   })
//
//   it('should not render icon if none passed', () => {
//     props.icon = undefined;
//     const { queryByTestId } = render(<RoundProgress {...props}>Button</RoundProgress>)
//     expect(queryByTestId('icon')).toBeNull()
//   })
//
// })
