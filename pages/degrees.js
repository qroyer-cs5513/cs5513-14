import Layout from '../components/layout';
import { getSortedDegrees } from '../lib/data';
import Link from 'next/link';

export async function getStaticProps() {
  const allData = await getSortedDegrees();
  return {
    props: {allData}
  }
}

export default function Home({allData}) {
  return (
    <Layout home>
      <div id="micropostList" className="list-group">
        {allData && allData.map(
          ({id, name, content, title, level, college, subject, minor, date}) => (
            <Link key={id} href={`/degrees/${id}`} className="list-group-item list-group-item-action">
              <p className="degreeTitle">{title}</p>
              <p className="degreeLevel">{level}</p>
              <p className="degreeCollege">At {college}</p>
              <p className="degreeSubjects">Major {subject}, Minor: {minor}</p>
              <p className="degreeDate">Graduation Date: {date}</p>
              <p className="degreeContent">{content}</p>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
}
