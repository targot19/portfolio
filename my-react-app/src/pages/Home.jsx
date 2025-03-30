import Introduction from "../sections/Introduction";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CustomCarousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <CustomCarousel />
      <Footer />
    </>
  )
}

export default Home;