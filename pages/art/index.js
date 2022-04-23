import Layout from '../../components/layout';
import Exhibition from './exhibition';
import Head from 'next/head';

import FourShadows from './4SHADOWS/raw.js';
import { info } from './4SHADOWS/index.js';

export default function Art() {
  return (
    <Layout>
      <Head>
        <title>
          Artwork | Simon El Nahas | Personal
          Website
        </title>
        <meta
          name='description'
          content='Art by Simon El Nahas'
          key='desc'
        />
      </Head>
      <h1> Art</h1>
      <Exhibition {...info}>
        <FourShadows />
      </Exhibition>
    </Layout>
  );
}
