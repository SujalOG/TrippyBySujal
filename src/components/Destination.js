import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>The journey of a thousand miles begins with a single step</p>

      <DestinationData
        className="first-dest"
        heading="Kedarnath Dham-India"
        text="Kedarnath Dham, located in the Rudraprayag district of Uttarakhand, is one of the most paramount locations for worshipers of Shiva. The air appears to be reverberating with the name of Lord Shiva amid the mighty snow-clad peaks, enchanting meadows and forests of the lower mountain range of Himalayas. Situated in a breathtaking location, near the source of Mandakini River and at the height of 3,584 meters, Kedarnath Dham celebrates the greatness of Lord Shiva. Kedarnath temple is one of the 12 Jyotir Lingams and is also the most important temple among the Panch Kedars (group of 5 Shiva temples in Garhwal Himalayas). It is also one of the significant temples of the sacred Chota Char Dham Yatra in Uttarakhand, raising the glory of the place to further heights."
        img1="https://www.tourmyindia.com/chardham/chardham-temple-images/kedarnath-main.webp"
        img2="https://images.unsplash.com/photo-1663737332621-f33cad400d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
      />

      <DestinationData
        className="first-dest-reverse"
        heading="Swiss Alps – The Magical Mountains"
        text="The mountainous alpine region of Switzerland is referred to as the Swiss Alps. In Switzerland’s four national languages, the Swiss Alps are known as Schweizer Alpen (German), Alpes suisses (French), Alpi svizzere (Italian), and Alps svizras (Romansch). The Swiss Alps are one of the three main geographic regions of Switzerland, the other two being the Swiss Plateau and the Jura Mountains. The portion of the Alps lying within Switzerland is sometimes referred to as the Central Alps, but more commonly known as the Swiss Alps. The Alps cover 65% of Switzerland's total land mass, making it one of the most mountainous of European countries. Although the Swiss Alps cover most of Switzerland, it is a lesser populated region of the country, although it is popular among outdoor enthusiasts for hiking and trekking tours. Some of the most popular long-distance treks in Europe lead through the Swiss Alps"
        img1="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-0308-switzerland-mountains-2.jpg"
        img2="https://www.alpsinsight.com/wp-content/uploads/2016/02/13SPcy0360.jpg"
      />

      <DestinationData
        className="first-dest"
        heading="Republic of Maldives"
        text="Maldives, in full Republic of Maldives, also called Maldive Islands, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.
        Maldives The islands extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west. The northernmost atoll is about 370 miles (600 km) south-southwest of the Indian mainland, and the central area, including the capital island of Male (Male’), is about 400 miles (645 km) southwest of Sri Lanka."
        img1="https://images.thrillophilia.com/image/upload/s--vI0Q6HT9--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/082/497/original/1675261154_shutterstock_2148766633.jpg.jpg"
        img2="https://lp-cms-production.imgix.net/2021-10/shutterstockRF_444622738.jpg?auto=format&w=1440&h=810&fit=crop&q=75"
      />

      <DestinationData
        className="first-dest-reverse"
        heading="Las Vegas-United States"
        text="Las Vegas, city, seat (1909) of Clark county, southeastern Nevada, U.S. The only major city in the American West to have been founded in the 20th century, Las Vegas grew from a tiny, desert-bound railroad service centre at the outset of the 20th century to the country’s fastest-growing metropolis at century’s end. This transformation—made possible by a combination of shrewd entrepreneurship, access to water, an extensive transportation network, and permissive state laws—has created the city now often known simply as “Vegas,” a place of vast casinos, elaborate hotels, and spectacular entertainment venues that attracts masses of visitors from throughout the world."
        img1="https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg"
        img2="https://bestlifeonline.com/wp-content/uploads/sites/3/2022/10/shutterstock_149733929.jpg?quality=82&strip=all"
      />

      <DestinationData
        className="first-dest"
        heading="Hong Kong Disneyland"
        text="Located on Lantau Island, Hong Kong Disneyland is the largest theme park in Hong Kong and the second-largest Disneyland in Asia. Often reputed as the ‘happiest place on this planet', it consists of nine themed areas.
        The magical kingdom of Hong Kong Disneyland sprawls over an area of 68 acres, seeing 34,000 guests daily. Apart from the thrilling and exhilarating rides, other attractions at Disneyland include terrific live shows, Disney Characters' parade, guided tours and magical events organised regularly. Housed inside the Disneyland Resort, there are varied themed suites and rooms.
        "
        img1="https://media.cntraveler.com/photos/5fdbcd5d770915229e50406a/1:1/w_1600,h_1600,c_limit/_DSC0557_a.jpg"
        img2="https://beingjellybeans.files.wordpress.com/2022/12/img_8196.jpg?w=1200"
      />
    </div>
  );
};

export default Destination;
