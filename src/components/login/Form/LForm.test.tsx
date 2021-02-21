import LForm from './LForm';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("<LForm />", () => {
    test("should display two inputs and a button", async () => {
        const {findAllByLabelText} = render(<LForm handleFormLoginFinished={() =>{}}/>);
      

    });
  });