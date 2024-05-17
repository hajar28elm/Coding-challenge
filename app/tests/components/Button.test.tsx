// Button.test.js
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/ui/Button';
import '@testing-library/jest-dom'; // Import jest-dom for matchers

describe('Button Component', () => {
  it('renders button text correctly', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick function when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders button with action class when actionButton prop is true', () => {
    const { container } = render(<Button text="Action Button" actionButton />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('action-button');
  });

  it('renders button with icon when icon prop is provided', () => {
    const { container } = render(<Button text="Button with Icon" icon="fa fa-star" />);
    const iconElement = container.querySelector('.fa.fa-star');
    expect(iconElement).toBeInTheDocument();
  });
});
