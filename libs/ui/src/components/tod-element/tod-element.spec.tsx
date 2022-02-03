import { render } from '@testing-library/react';

import TodElement from './tod-element';

describe('TodElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodElement />);
    expect(baseElement).toBeTruthy();
  });
});
