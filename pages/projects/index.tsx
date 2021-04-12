import Layout from '../../components/layout';
import Head from 'next/head';
import { getProjectsData } from '../../lib/projects';

export default function Projects({ data }) {
  return (
    <Layout>
      <Head>
        <title>Simons' Projects</title>
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentHtml,
        }}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getProjectsData();
  return {
    props: {
      data,
    },
  };
}
