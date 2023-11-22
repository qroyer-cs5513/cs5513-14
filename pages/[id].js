import Layout from '../components/layout';
import {getAllIds} from '../lib/data';
import {getData} from '../lib/data';

export async function getStaticProps({params}) {
  const item = await getData(params.id);
  return {
    props: {
      item
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {paths, fallback:false};
}

export default function Entry( {item} ) {
  return (
    <Layout>
      <article className="presidentInfo">
        <h2>{item.post_title}</h2>
        <p>Date: {item.post_date}</p>
        {item.post_content}
      </article>
    </Layout>
  );
}
