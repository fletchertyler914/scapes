import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu, WalletButton } from '..';
import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  logo: StaticImageData;
}

export const Header = ({ logo }: HeaderProps) => (
  <header>
    <div className="container">
      <div className="header">
        <Link href="/">
          <>
            <Image
              className="logo__img img-responsive"
              src={logo}
              alt="Scapes logo"
              width={45}
              height={45}
            />
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
          <WalletButton />
        </span>
      </div>
    </div>
  </header>
);

export default Header;
