import Footer from './Footer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe("<Footer />", () => {
    test("should display two texts, one is a question, the other a link", async () => {
        
        const { findByTestId } = render(<Footer />);

        const questionText = await findByTestId('question-footer');;
        const linkText = await findByTestId('link-footer');

        expect(questionText).toBeInTheDocument();
        expect(linkText).toBeInTheDocument();

        expect(questionText).toHaveTextContent('Esqueceu seu login ou senha?');
        expect(linkText).toHaveTextContent('aqui');
        expect(linkText).toHaveAttribute('href');
    });
  });
