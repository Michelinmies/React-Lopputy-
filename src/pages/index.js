import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup: Vaskiluoto',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Vasklot_hamn_cirka_1994_med_Silja_Festival_p%C3%A5_inkommande_och_Wasa_Queen_vid_kaj_i_bakgrunden_Sundom_sk%C3%A4rg%C3%A5rd.jpg',
    address: 'Vaskiluoto, Vaasa',
    description: 'This is a first meetup! Picture: Maritime Museum of Finland, CC BY-SA 4.0',
  },
  {
    id: 'm2',
    title: 'A Second Meetup: VAMK',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg',
    address: 'Wolffintie 30, Vaasa',
    description: 'This is a second meetup! Picture: Santeri Viinamäki, 2018m CC BY-SA 4.0',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
