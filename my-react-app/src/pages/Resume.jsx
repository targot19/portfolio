import NavBar from "../components/NavBar";
import Experience from "../sections/Experience";
import Footer from "../components/Footer";
import Skillset from "../sections/Skillset";
import Education from "../sections/Education";

const Resume = () => {
    return (
        <>
            <NavBar />
            <Experience />
            <Education />
            <Skillset />
            <Footer />
        </>
    )
}

export default Resume;