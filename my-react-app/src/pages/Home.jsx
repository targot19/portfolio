import Introduction from "../sections/Introduction";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RecommendationCarousel from "../components/RecommendationCarousel";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <Education />
      <RecommendationCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;