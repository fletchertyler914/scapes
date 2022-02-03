import { render } from '@testing-library/react';

import Element from './element';

describe('Element', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Element />);
    expect(baseElement).toBeTruthy();
  });
});
