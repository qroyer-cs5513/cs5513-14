import Layout from '../../components/layout';
import {getAllEventIds} from '../../lib/data';
import {getEvent} from '../../lib/data';

export async function getStaticProps({params}) {
  const item = await getEvent(params.id);
  return {
    props: {
      item
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllEventIds();
  return {paths, fallback:false};
}

export default function Entry( {item} ) {
  return (
    <Layout>
      <article className="viewEvent">
        <h2 class="eventTitle">{item.title}</h2>
        <p class="eventName">{item.name}</p>
        <p class="eventDatetime">{item.start} - {item.end}</p>
        <p class="eventLocation">{item.location}</p>
        <p class="eventContent">{item.content}</p>
      </article>
    </Layout>
  );
}
