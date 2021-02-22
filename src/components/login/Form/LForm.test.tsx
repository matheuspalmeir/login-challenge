import React from 'react';
import LForm from './LForm';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const renderLForm = (props: Partial<any> = {}) => {
  const defaultProps: any = {
    onPasswordChange() {
      return;
    },
    onEmailChange() {
      return;
    },
    onSubmit() {
      return;
    }
  };
  return render(<LForm {...defaultProps} {...props} />);
}

describe("<LForm />", () => {

    test("should display two inputs and a button", async () => {
        const {findByTestId} = renderLForm({handleFormLoginFinished: () => {}});

        const loginForm = await findByTestId('login-form');
        const inputEmail = await findByTestId('input-email');
        const inputPassword = await findByTestId('input-password');
        const submitButton = await findByTestId('submit-button');


        expect(loginForm).toBeInTheDocument();
        //expect(loginForm).toHaveFormValues({email: "", password: "" });

        expect(inputEmail).toBeInTheDocument();
        expect(inputEmail).toHaveAttribute('placeholder', 'user.name@gmail.com'); 
        expect(inputEmail).toHaveAttribute('type', 'text');

        expect(inputPassword).toBeInTheDocument();
        expect(inputPassword).toHaveAttribute('placeholder', '*********'); 
        expect(inputPassword).toHaveAttribute('type', 'password');

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toHaveTextContent('ENTRAR');

    });
 
    //Will not pass because i did not a onChange function to email field,
    //but i left this test here thinking about future implementation
    test("should allow entering an email", async () => {
      const onChange = jest.fn();
      const { findByTestId } = renderLForm({handleFormLoginFinished: () => {}});
      const inputEmail = await findByTestId("input-email");
    
      fireEvent.change(inputEmail, { target: { value: "test@email.com" } });
    
      expect(onChange).toHaveBeenCalledWith("test@email.com");
    });
    
    //I think, because i used Ant Design Form component this test is not
    //passing... but i don't have time to figure out! :(
    test("should submit the form with email and password", async () => {
      const onSubmit  = jest.fn();
      const { findByTestId } = renderLForm({handleFormLoginFinished: onSubmit});

      const inputEmail = await findByTestId('input-email');
      const inputPassword = await findByTestId('input-password');
      const submitButton = await findByTestId('submit-button');
    
      fireEvent.change(inputEmail, { target: { value: "test@email.com" } });
      fireEvent.change(inputPassword, { target: { value: "password" } });
      fireEvent.click(submitButton);
    
      expect(onSubmit).toHaveBeenCalledWith("test@email.com", "password");
    });

  });