import Layout from '../../components/layout';
import {getAllDegreeIds} from '../../lib/data';
import {getDegree} from '../../lib/data';

export async function getStaticProps({params}) {
  const item = await getDegree(params.id);
  return {
    props: {
      item
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllDegreeIds();
  return {paths, fallback:false};
}

export default function Entry( {item} ) {
  return (
    <Layout>
      <article className="viewDegree">
        <h2 class="degreeTitle">{item.post_title}</h2>
        <p class="degreeLevel">{item.level}</p>
        <p class="degreeCollege">At {item.college}</p>
        <p class="degreeSubjects">Major: {item.subject}, Minor: {item.minor}</p>
        <p class="degreeDate">Graduation Date: {item.date}</p>
        <p class="degreeContent">{item.content}</p>
      </article>
    </Layout>
  );
}
