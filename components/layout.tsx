import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Simon El Nahas';
export const siteTitle = "Simon El Nahas' blog";

export default function Layout({
  children,
  home, //TODO: provide types
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='my thougts'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name='og:title'
          content={siteTitle}
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/pb.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/pb.jpg'
                  className={
                    utilStyles.borderCircle
                  }
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a
                  className={
                    utilStyles.colorInherit
                  }
                >
                  {name}
                </a>
              </Link>
            </h2>
          </>
        )}
        <div>
          {/* TODO: Add flex box */}
          <Link href='/'>Home</Link>{' '}
          <Link href='/blog'>Blog</Link>{' '}
          <Link href='/projects'>Projects</Link>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
