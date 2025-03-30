import Introduction from "../sections/Introduction";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RecommendationCarousel from "../components/RecommendationCarousel";

const Home = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <RecommendationCarousel />
      <Footer />
    </>
  )
}

export default Home;