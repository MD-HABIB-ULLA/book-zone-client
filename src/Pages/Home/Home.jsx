import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Feature from "../../Components/Feature/Feature";
import LibraryServices from "../../Components/LibraryServices/LibraryServices";
import SwiperBanner from "../../Components/Swiper/Swiper";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <SwiperBanner /> */}
      <Feature/>
      <Categories />
      <LibraryServices />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
