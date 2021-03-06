import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h1>About</h1>
        <p style={{ textAlign: 'center' }}>
          I make complex things simple.
        </p>
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
