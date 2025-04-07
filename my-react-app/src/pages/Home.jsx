import Introduction from "../sections/Introduction";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import "../styles/Embla.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const OPTIONS = { align: 'start' }
  const SLIDES = t("slides", { returnObjects: true }) || [];
  const EMPLOYER = t("employer", { returnObjects: true }) || [];

  return (
    <>
      <NavBar />
      <Introduction />
      <Education />
      <EmblaCarousel slides={SLIDES} employer={EMPLOYER} options={OPTIONS} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;