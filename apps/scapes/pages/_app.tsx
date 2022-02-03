import { Layout } from '@scapes/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

import { clusterApiUrl } from '@solana/web3.js';
import { getWalletAdapters } from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import { ReactComponent as ScapesLogo } from '../public/media/scapes-logo.svg';
import { ReactComponent as DiscordIcon } from '../public/media/discord-icon.svg';
import { ReactComponent as TelegramIcon } from '../public/media/telegram-icon.svg';
import { ReactComponent as TwitterIcon } from '../public/media/twitter-icon.svg';
import { ReactComponent as MediumIcon } from '../public/media/md.svg';

require('@solana/wallet-adapter-react-ui/styles.css');
import './styles.scss';
import { useCallback, useMemo } from 'react';

const layoutProps = {
  ScapesLogo,
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(() => getWalletAdapters({ network }), [network]);

  const onError = useCallback((error: WalletError) => {
    console.log('Wallet error:', error.message, error);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Scapes" />
      </Head>

      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '675891703405985');
          fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
          height={1}
          width={1}
          className="fb-pixel"
          src="https://www.facebook.com/tr?id=675891703405985&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>

      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} onError={onError} autoConnect>
          <WalletModalProvider>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default MyApp;
