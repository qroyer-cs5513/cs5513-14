import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import Link from 'next/link';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {allData}
  }
}

export default function Home({allData}) {
  return (
    <Layout home>
      <div id="listOfPresidents" className="list-group">
        {allData && allData.map(
          ({id, name}) => (
            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )}
      </div>
    </Layout>
  );
}
