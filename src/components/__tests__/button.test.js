import Button from '../button'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';

test(`button`, async () => {
    const onClick = jest.fn(async () => {
    })
    render(<Button data-testid='test-button' onClick={onClick}>button text</Button>);
    const button = screen.getByTestId('test-button')
    expect(button.textContent).toBe('button text')

    act(() => {
        fireEvent.click(button)
    })
    expect(button).toBeDisabled()
    expect(button.textContent).toBe('loading')

    await waitFor(() => expect(button).not.toBeDisabled())

    expect(button).not.toBeDisabled()
    expect(button.textContent).toBe('button text')
})