import React from 'react';
import LoginView from 'views/login';
import { fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { INITIAL_STATE } from '../../services/reducers/auth';
import { render } from '@testing-library/react';

const renderComponent = () =>
  renderWithStore({ auth: INITIAL_STATE })(<LoginView />);

describe('Login Page', () => {
  it('should show Signup on page title', () => {
    const expectPageTitle = 'Login';

    renderComponent();
    expect(document.title).toEqual(expectPageTitle);
  });

  it('should has Sign Up form', () => {
    const { getByPlaceholderText } = renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);

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
    const { getByPlaceholderText, getByText } = renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);

    userEvent.clear(usernameInput);
    userEvent.clear(passwordInput);
    await waitFor(() => {
      expect(getByText(/Please input username/i)).toBeInTheDocument();
    });
  });

  it('should redirect to homepage if all fields are correct', async () => {
    const { getByPlaceholderText, getByRole } = renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);

    userEvent.clear(usernameInput);
    userEvent.clear(passwordInput);

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
    const { getByPlaceholderText, getByRole, getByText } = renderComponent();

    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);

    userEvent.type(usernameInput, 'username');
    userEvent.type(passwordInput, '123123');

    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(getByText(/incorrect/i)).toBeInTheDocument();
    });
  });
});
