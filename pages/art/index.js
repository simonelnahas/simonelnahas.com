import Layout from '../../components/layout';
import Exhibition from './exhibition';

import FourShadows from './4SHADOWS/raw.js';
import { info } from './4SHADOWS/index.js';

export default function Art() {
  return (
    <Layout>
      <h1> Art</h1>
      <Exhibition {...info}>
        <FourShadows />
      </Exhibition>
    </Layout>
  );
}
