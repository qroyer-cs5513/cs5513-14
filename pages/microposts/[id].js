import Layout from '../../components/layout';
import {getAllIds} from '../../lib/data';
import {getData} from '../../lib/data';

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
      <article className="viewMicropost">
        <h2 class="micropostTitle">{item.post_title}</h2>
        <p class="micropostContent">{item.content}</p>
        <p class="micropostDate">Date: {item.date}</p>
        <p class="micropostPostContent">{item.post_content}</p>
      </article>
    </Layout>
  );
}
