import { Footer, Header } from '..';
import './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
  ScapesLogo: any;
  DiscordIcon: any;
  TelegramIcon: any;
  TwitterIcon: any;
  MediumIcon: any;
}

export function Layout({
  children,
  ScapesLogo,
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
}: LayoutProps) {
  const footerProps = {
    ScapesLogo,
    DiscordIcon,
    TelegramIcon,
    TwitterIcon,
    MediumIcon,
  };
  return (
    <>
      <Header ScapesLogo={ScapesLogo} />
      <main className="app">{children}</main>
      <Footer {...footerProps} />
    </>
  );
}

export default Layout;
