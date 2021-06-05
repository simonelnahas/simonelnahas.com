import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Simon El Nahas';
export const siteTitle = 'Simon El Nahas';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>Simon El Nahas</title>
        <meta
          name='title'
          content='Simon El Nahas'
        />
        <meta
          name='description'
          content='Personal website'
        />
        <meta
          property='og:image'
          content={'images/pb.jpg'}
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

        <div className={styles.flexHorizontal}>
          {/* TODO: Add flex box */}
          <Link href='/'>About</Link>{' '}
          <Link href='/blog'>Blog</Link>{' '}
          <Link href='/projects'>Projects</Link>
          <Link href='/fun'>Fun🥳</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
