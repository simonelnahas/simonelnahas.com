import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Simon El Nahas';
export const siteTitle = name;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
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
          <Link href='/'>About</Link>{' '}
          <Link href='/blog'>Blog</Link>{' '}
          <a
            href='https://twitter.com/simonelnahas'
            target='_blank'
          >
            Twitter
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/simonelnahas/'
            target='_blank'
          >
            LinkedIn
          </a>{' '}
          <Link href='/fun'>Fun</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
