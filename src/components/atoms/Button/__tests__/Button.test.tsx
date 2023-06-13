import React, {PropsWithChildren} from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, {ButtonProps} from '../Button'

describe('Button', () => {
  let props: PropsWithChildren<ButtonProps>

  beforeEach(() => {
    props = {
      variant: 'primary',
      onClick: jest.fn()
    }
  })

  it('should render correctly', () => {
    const { getByText } = render(<Button {...props}>Button</Button>)
    expect(getByText('Button')).toBeInTheDocument()
  })

  it('should call onClick function when clicked', () => {
    const { getByText } = render(<Button {...props}>Button</Button>)
    fireEvent.click(getByText('Button'))
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should render icon if passed', () => {
    props.icon = <i className="fa fa-plus" />
    const { getByTestId } = render(<Button {...props}>Button</Button>)
    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('should not render children if none passed', () => {
    props.children = undefined;
    const { queryByText } = render(<Button {...props} />)
    expect(queryByText('Button')).toBeNull()
  })

  it('should not render icon if none passed', () => {
    props.icon = undefined;
    const { queryByTestId } = render(<Button {...props}>Button</Button>)
    expect(queryByTestId('icon')).toBeNull()
  })

})
