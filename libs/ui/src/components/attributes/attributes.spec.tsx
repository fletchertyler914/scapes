import { render } from '@testing-library/react';

import Attributes from './attributes';

describe('Attributes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Attributes />);
    expect(baseElement).toBeTruthy();
  });
});
