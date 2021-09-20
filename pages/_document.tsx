import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/images/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/images/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/images/favicons/favicon-16x16.png'
          />
          <link
            rel='manifest'
            href='/images/favicons/site.webmanifest'
          />
          <link
            rel='mask-icon'
            href='/images/favicons/safari-pinned-tab.svg'
            color='#008ac5'
          />
          <link
            rel='shortcut icon'
            href='/images/favicons/favicon.ico'
          />
          <meta
            name='msapplication-TileColor'
            content='#ffffff'
          />
          <meta
            name='msapplication-config'
            content='/images/favicons/browserconfig.xml'
          />
          <meta
            name='theme-color'
            content='#ffffff'
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
