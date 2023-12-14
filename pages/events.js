import Layout from '../components/layout';
import { getSortedEvents } from '../lib/data';
import Link from 'next/link';

export async function getStaticProps() {
  const allData = await getSortedEvents();
  return {
    props: {allData}
  }
}

export default function Home({allData}) {
  return (
    <Layout home>
      <div id="micropostList" className="list-group">
        {allData && allData.map(
          ({id, name, content, start_date, end_date, location}) => (
            <Link key={id} href={`/events/${id}`} className="list-group-item list-group-item-action">
              <p className="eventTitle">{name}</p>
              <p className="eventDatetime">{start_date} - {end_date}</p>
              <p className="eventLocation">{location}</p>
              <p className="eventContent">{content}</p>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
}
