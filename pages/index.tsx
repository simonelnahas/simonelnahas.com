import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, {
  siteTitle,
} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name='description'
          content="Simon El Nahas' personal website"
          key='desc'
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: 'center' }}>
          I make complex things simple.
        </p>
        <a
          href='https://twitter.com/simonelnahas'
          target='_blank'
        >
          Twitter
        </a>
        <br />
        <a
          href='https://www.linkedin.com/in/simonelnahas/'
          target='_blank'
        >
          LinkedIn
        </a>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      ></section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
