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
      <div id="micropostList" className="list-group">
        {allData && allData.map(
          ({id, name, content, date, priority}) => (
            <Link key={id} href={`/microposts/${id}`} className={`list-group-item list-group-item-action micropostPriority${priority}`}>
              <p className="micropostTitle">{name}</p>
              <p className="micropostContent">{content}</p>
              <p className="micropostDate">{date}</p>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
}
