import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://meetupuser:RKbhVj8zhkbjivJy@cluster0.fzf8u3l.mongodb.net/meetups_db?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }; 
}

/* export async function getStaticProps() {
    // fetch data from API
    return {
      props: {
        meetups: DUMMY_MEETUPS
      };
      revalidate: 1
    };
}
  */
export default HomePage;
