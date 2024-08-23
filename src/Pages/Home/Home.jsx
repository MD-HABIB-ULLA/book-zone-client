import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Feature from "../../Components/Feature/Feature";
import GetUpdate from "../../Components/GetUpdate/GetUpdate";
import LibraryServices from "../../Components/LibraryServices/LibraryServices";
import Reviews from "../../Components/Reviews/Reviews";
import SwiperBanner from "../../Components/Swiper/Swiper";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Feature />
      <LibraryServices />

      <SwiperBanner />
      <Reviews />
      <GetUpdate />
    </div>
  );
};

export default Home;
