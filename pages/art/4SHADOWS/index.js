import FourShadows from './raw';
import Exhibition from '../exhibition';
import Layout from '../../../components/layout';
import Head from 'next/head';

export const info = {
  author: 'Simon El Nahas',
  date: '2022-04-23',
  title: '4 shadows',
  description:
    'Inspired by Robert Irwin. Untitled. 1968. Seen at Copenhagen Contemporary. Interact with the shadows using your mouse.',
  href: '/art/4SHADOWS',
};

export default function index() {
  return (
    <Layout>
      <Head>
        <title>4 SHADOWS - Simon El Nahas</title>
      </Head>
      <br />
      <br />
      <Exhibition {...info}>
        <FourShadows />
      </Exhibition>
    </Layout>
  );
}
