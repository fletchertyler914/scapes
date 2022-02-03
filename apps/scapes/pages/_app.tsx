import { Layout } from '@scapes/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import logo from '../public/media/logo.png';
import './styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
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

    <Layout logo={logo}>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
