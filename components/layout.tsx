import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {
  TwitterLink,
  LinkedinLink,
} from './social/index.js';

const name = 'Simon El Nahas';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{name}</title>
        <meta
          name='description'
          content="Simon El Nahas' personal website"
          key='desc'
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
          <Link href='/'>About</Link>
          <Link href='/blog'>Blog</Link>

          <Link href='/art'>Art</Link>
        </div>
      </header>
      <main>{children}</main>
      <div className={styles.footer}>
        <TwitterLink />
        <LinkedinLink />
      </div>
    </div>
  );
}
