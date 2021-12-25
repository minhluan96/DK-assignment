import React from 'react';
import LoginView from 'views/login';
import { fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

const renderComponent = () => renderWithStore()(<LoginView />);

describe('Login Page', () => {
  it('should show Signup on page title', () => {
    const expectPageTitle = 'Login';

    renderComponent();
    expect(document.title).toEqual(expectPageTitle);
  });

  it('should has Sign Up form', () => {
    const { getByPlaceholderText, getByLabelText } = renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByLabelText(/password/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should has login button', () => {
    const { getByRole } = renderComponent();

    expect(
      getByRole('button', {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  it('should show errors if form was empty', async () => {
    const { getByRole, getAllByText } = renderComponent();
    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(getAllByText(/please input/i)).toBeTruthy();
    });
  });

  it('should redirect to homepage if all fields are correct', async () => {
    const { getByPlaceholderText, getByLabelText, getByRole } =
      renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByLabelText(/password/i);

    userEvent.type(usernameInput, 'Mona_Kassulke14');
    userEvent.type(passwordInput, 'EECsjlVnWIXfeuA');

    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.click(loginButton);

    await waitFor(() => {
      const expectPageTitle = 'Homepage';
      expect(document.title).toEqual(expectPageTitle);
    });
  });

  it('should show errors if email was incorrect', async () => {
    const { getByPlaceholderText, getByLabelText, getByRole, getAllByText } =
      renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByLabelText(/password/i);

    userEvent.type(usernameInput, 'username');
    userEvent.type(passwordInput, '123123');

    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(getAllByText(/incorrect username or password/i)).toBeTruthy();
    });
  });
});
