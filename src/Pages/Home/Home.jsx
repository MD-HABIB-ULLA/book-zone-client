import Categories from "../../Components/Categories/Categories";
import LibraryServices from "../../Components/LibraryServices/LibraryServices";
import SwiperBanner from "../../Components/Swiper/Swiper";


const Home = () => {
    return (
        <div>
            <SwiperBanner/>
            <Categories/>
            <LibraryServices/>
        </div>
    );
};

export default Home;