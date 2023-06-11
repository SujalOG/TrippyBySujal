import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Your Journey Your Story</p>
      <div className="TripCard">
        <TripData
          image="https://www.holidify.com/images/bgImages/BALI.jpg"
          Heading="Trip In Indonesia"
          text="Indonesia,officially the Republic of Indonesia,is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        />

        <TripData
          image="https://www.forbes.com/dam/imageserve/630c61a43cba36777100c481/x.jpg"
          Heading="Trip In Singapore"
          text="Singapore,officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east, and the Straits of Johor to the north"
        />

        <TripData
          image="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg"
          Heading="Trip In France"
          text="France,officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛz]),is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world"
        />
      </div>
    </div>
  );
}

export default Trip;
