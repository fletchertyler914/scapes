import { render } from '@testing-library/react';

import WalletButton from './wallet-button';

describe('WalletButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WalletButton />);
    expect(baseElement).toBeTruthy();
  });
});
