import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import { MobileMenu } from '..';
import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  ScapesLogo: any;
}

export const Header = ({ ScapesLogo }: HeaderProps) => (
  <header>
    <div className="container">
      <div className="header">
        <Link href="/">
          <>
            <ScapesLogo />
            <span className="logo__text font-podkova">SCAPES</span>
          </>
        </Link>

        <MobileMenu />

        <nav className="show-md nav">
          <Link href="/">Home</Link>
          <Link href="/rarity">Rarity</Link>
          <Link href="/my-scapes">My Scapes</Link>
        </nav>
        <span className="show-md flex">
          <WalletMultiButton className='wallet-adapter-button' />
        </span>
      </div>
    </div>
  </header>
);

export default Header;
