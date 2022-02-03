import { Footer, Header } from '..';
import './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
  logo: StaticImageData;
}

export function Layout({ children, logo }: LayoutProps) {
  return (
    <>
      <Header logo={logo} />
      <main className="app">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
