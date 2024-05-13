import Categories from "../../Components/Categories/Categories";
import LibraryServices from "../../Components/LibraryServices/LibraryServices";
import SwiperBanner from "../../Components/Swiper/Swiper";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <SwiperBanner />
      <Categories />
      <LibraryServices />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
