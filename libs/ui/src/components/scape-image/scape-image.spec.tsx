import { render } from '@testing-library/react';

import ScapeImage from './scape-image';

describe('ScapeImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScapeImage />);
    expect(baseElement).toBeTruthy();
  });
});
