import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("<Header />", () => {
    test("should display welcome message and an instruction", async () => {
        
      const {findByTestId} = render(<Header />)

      const welcomeMessage = await findByTestId('welcome-message');
      const instructionMessage = await findByTestId('instruction-message');

      expect(welcomeMessage).toBeInTheDocument();
      expect(instructionMessage).toBeInTheDocument();

      expect(welcomeMessage).toHaveTextContent('Olá, seja bem-vindo!');
      expect(instructionMessage).toHaveTextContent('Para acessar a plataforma faça seu login.')

    });
  });