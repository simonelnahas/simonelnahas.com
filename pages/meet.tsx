import Layout from '../components/layout';
import MeetButton from '../components/zoom/zoomButton';
import Head from 'next/head';

export default function Fun() {
  return (
    <Layout>
      <Head>
        <title>Simon's Meeting Room</title>
      </Head>
      <MeetButton />
    </Layout>
  );
}
